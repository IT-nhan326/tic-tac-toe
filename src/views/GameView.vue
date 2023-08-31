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
        @playerTurnFinish="updateMatchDetails"
      />
      <!-- <ViewFooter
        :player-x-score="xScore"
        :player-o-score="oScore"
        :ties-score="tiesScore"
      /> -->
    </div>
    <CommonModal
      v-if="isRestartPopup"
      name="restart-popup"
      @closeModal="closeRestartModal"
      @triggerRestart="handleRestartConfirmed"
    >
      <template #modal-title>{{ restartModal.title }}</template>
      <template #cancel-btn>{{ restartModal.cancelBtn }}</template>
      <template #accept-btn>{{ restartModal.acceptBtn }}</template>
    </CommonModal>
  </div>
</template>

<script>
import GameBoard from "@/components/GameBoard.vue";
import ViewHeader from "@/components/ViewHeader.vue";
import CommonModal from "@/components/modal/CommonModal.vue";
// import ViewFooter from "@/components/ViewFooter.vue";

export default {
  name: "GameView",
  components: {
    GameBoard,
    ViewHeader,
    CommonModal,
    // ViewFooter,
  },
  data() {
    return {
      currentPlayer: "X",
      restartRequest: false,
      triggerRestart: false,
      roundEnd: false,
      // xScore: 0,
      // oScore: 0,
      // tiesScore: 0,
      restartModal: {
        title: "RESTART GAME?",
        cancelBtn: "NO, CANCEL",
        acceptBtn: "YES",
      },
      endRoundModal: {
        title: "TAKES THE ROUND",
        cancelBtn: "QUIT",
        acceptBtn: "NEXT ROUND",
      },
    };
  },
  computed: {
    isRestartPopup() {
      return this.restartRequest;
    },
    isModalPopup() {
      return this.restartRequest;
    },
    isRoundEnd() {
      return this.roundEnd;
    },
  },
  methods: {
    openRestartModal() {
      this.restartRequest = true;
    },
    closeRestartModal() {
      this.restartRequest = false;
    },
    handleRestartConfirmed() {
      this.triggerRestart = true;
      this.$nextTick(() => {
        this.triggerRestart = false;
      });

      this.updateMatchDetails();
    },
    updateMatchDetails(turn = 0, winner = null) {
      console.log(
        `🚀 ~ file: GameView.vue:95 ~ updateMatchDetails ~ this.currentPlayer: ${this.currentPlayer} , turn ${turn}`
      );
      this.currentPlayer = turn % 2 === 0 ? "X" : "O";

      if ((winner !== null) & (turn !== 0)) {
        this.currentPlayer = "X";
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
