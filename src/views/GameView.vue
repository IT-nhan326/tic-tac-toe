<template>
  <div class="container">
    <div :class="['game-view', {'game-view__blur': isModalPopup }]">
      <ViewHeader
        :current-player="currentPlayer"
        @requestRestart="openRestartModal"
      />
      <GameBoard
        :trigger-restart="triggerRestart"
        :current-player="currentPlayer"
        @playerTurnFinish="updateRoundDetails"
      />
    </div>
    <ViewFooter
      :player-x-score="xScore"
      :player-o-score="oScore"
      :ties-score="tiesScore"
    />
    <RestartModal
      v-if="isRestartPopup"
      @close="closeRestartModal"
      @accept="handleRestartConfirmed"
    >
    </RestartModal>
    <EndRoundModal
      v-if="isRoundEnd"
      :winner="winner"
      @close="closeNextRoundModal"
      @accept="handleNextRoundConfirmed"
    >
    </EndRoundModal>
  </div>
</template>

<script>
import GameBoard from "@/components/GameBoard.vue";
import ViewHeader from "@/components/ViewHeader.vue";
import ViewFooter from "@/components/ViewFooter.vue";
import EndRoundModal from "@/components/smart/modal/EndRoundModal.vue";
import RestartModal from "@/components/smart/modal/RestartModal.vue";

export default {
  name: "GameView",
  components: {
    GameBoard,
    ViewHeader,
    EndRoundModal,
    RestartModal,
    ViewFooter,
  },
  data() {
    return {
      currentPlayer: "X",
      restartRequest: false,
      triggerRestart: false,
      roundEnd: false,
      xScore: 0,
      oScore: 0,
      tiesScore: 0,
      winner: "",
    };
  },
  computed: {
    isRestartPopup() {
      return this.restartRequest;
    },
    isModalPopup() {
      return this.isRestartPopup || this.isRoundEnd;
    },
    isRoundEnd() {
      return this.roundEnd;
    },
  },
  created() {
    this.initGameHistory();
  },
  methods: {
    openRestartModal() {
      this.restartRequest = true;
    },
    closeRestartModal() {
      this.restartRequest = false;
    },
    openNextRoundModal() {
      this.roundEnd = true;
    },
    closeNextRoundModal() {
      this.roundEnd = false;
    },
    reEvaluateScoreBoard(winner) {
      this.winner = winner;
      switch (winner) {
        case "X":
          this.xScore++;
          break;
        case "O":
          this.oScore++;
          break;
        case "tie":
          this.tiesScore++;
          break;
        default:
          null;
      }
      this.saveLocalStorage();
    },
    handleRestartConfirmed() {
      this.triggerRestart = true;
      this.closeRestartModal();
      this.closeNextRoundModal();
      this.$nextTick(() => {
        this.triggerRestart = false;
      });

      this.updateRoundDetails();
    },
    handleNextRoundConfirmed() {
      this.currentPlayer = "X";
      this.handleRestartConfirmed();
    },
    updateRoundDetails(turn = 0, winner = null) {
      this.currentPlayer = turn % 2 === 0 ? "X" : "O";

      if ((winner !== null) & (turn !== 0)) {
        this.reEvaluateScoreBoard(winner);
        this.openNextRoundModal(winner);
      }
    },
    saveLocalStorage() {
      const gameScore = {
        xScore: this.xScore,
        oScore: this.oScore,
        tiesScore: this.tiesScore,
      };
      localStorage.setItem("gameScore", JSON.stringify(gameScore));
    },
    initGameHistory() {
      const storedScore = localStorage.getItem("gameScore");
      if (storedScore) {
        const gameScore = JSON.parse(storedScore);

        this.xScore = gameScore.xScore;
        this.oScore = gameScore.oScore;
        this.tiesScore = gameScore.tiesScore;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.game-view {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__blur {
    filter: blur(2px);
    pointer-events: none;
  }
}
</style>
