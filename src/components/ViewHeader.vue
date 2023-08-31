<template>
  <div class="view-header">
    <div class="mark-icons">
      <GameIcon :icon-name="xIcon" />
      <GameIcon :icon-name="oIcon" />
    </div>

    <div class="player-turn">
      <GameIcon :icon-name="currentPlayerIcon()" />turn
    </div>

    <div class="restart">
      <button
        class="restart-btn"
        @click="openRestartModal()"
      >
        <GameIcon :icon-name="restartIcon" />
      </button>
    </div>
  </div>
</template>

<script>
import GameIcon from "./GameIcon.vue";
import { FaIconEnum } from "@/constants/enum";

export default {
  components: { GameIcon },
  props: {
    currentPlayer: {
      type: String,
      default: "X",
    },
  },
  data() {
    return {
      xIcon: FaIconEnum.xIcon,
      oIcon: FaIconEnum.oIcon,
      restartIcon: FaIconEnum.restartIcon,
    };
  },
  methods: {
    currentPlayerIcon() {
      return this.currentPlayer === "O" ? this.oIcon : this.xIcon;
    },
    openRestartModal() {
      return this.$emit("requestRestart");
    },
  },
};
</script>

<style lang="scss" scoped>
.view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 460px;
  margin-bottom: 30px;

  > div {
    flex: 1;
    text-align: center;
    margin: 0 10px;
    width: 140px;
    height: 48px;
    font-size: 24px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .mark-icons {
    display: flex;
    align-items: flex-start;
  }

  .player-turn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a2a33;
    border: 1px solid #10212a;
    border-radius: 9px;
    box-shadow: 0 0 4px #10212a;
    color: #a8bfc9;
    box-shadow: 0 4px #10212a;
  }
  .restart {
    text-align: right;
    font-size: 24px;
  }
  .restart-btn {
    width: 52px;
    height: 48px;
    background-color: #a8bfc9;
    border: none;
    border-radius: 9px;
    color: #1a2a33;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px #6b8997;
  }
}
</style>
