<template>
  <button @click="markBlock" class="game-block">
    <font-awesome-icon
      v-if="mark === 'X'"
      :icon="['fas', 'xmark']"
      class="fa-xmark"
    />
    <font-awesome-icon v-if="mark === 'O'" :icon="['fas', 'o']" class="fa-o" />
  </button>
</template>

<script>
export default {
  name: "GameBlock",
  props: ["currentPlayer"],
  data() {
    return {
      mark: "",
    };
  },
  methods: {
    markBlock() {
      if (!this.mark) {
        this.$emit("blockClicked");
        this.mark = this.currentPlayer;
      }
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
