<template>
  <div class="game-board">
    <GameBlock v-for="i in 9" :key="i" />
  </div>
</template>

<script>
import GameBlock from "./GameBlock.vue";

export default {
  name: "GameBoard",
  components: {
    GameBlock,
  },
};
</script>

<style lang="scss" scoped>
.game-board {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1rem;
}
</style>
