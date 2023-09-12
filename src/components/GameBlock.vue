<template>
  <button
    class="game-block"
    @click="markBlock"
  >
    <!-- should I combine 2 GameIcon into 1? -->
    <GameIcon
      v-if="isXPlayer"
      :icon-name="xIcon"
      class="fa-xmark"
    />
    <GameIcon
      v-if="isOPlayer"
      :icon-name="oIcon"
      class="fa-o"
    />
  </button>
</template>

<script>
import GameIcon from "./GameIcon.vue";
import { FaIconEnum } from "../constants/enum.js";

export default {
  name: "GameBlock",
  components: { GameIcon },
  props: {
    mark: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      xIcon: FaIconEnum.xIcon,
      oIcon: FaIconEnum.oIcon,
    };
  },
  computed: {
    isXPlayer() {
      return this.mark === "X";
    },
    isOPlayer() {
      return this.mark === "O";
    },
  },
  methods: {
    markBlock() {
      this.$emit("blockClicked");
    },
  },
};
</script>

<style lang="scss" scoped>
.game-block {
  width: 140px;
  height: 132px;
  background-color: #1f3641;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 8px #10212a;
  transition: all 0.1s ease;

  &:hover {
    background-color: #123243;
  }

  &:active {
    background-color: #10212a;
  }
}

.fa-xmark {
  font-size: $player-icon-size;
  color: #31c3bd;
}

.fa-o {
  font-size: $player-icon-size;
  color: #f2b137;
}
</style>
