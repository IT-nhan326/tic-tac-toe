<template>
  <div class="game-view">
    <GameBoard />
  </div>
</template>

<script>
import GameBoard from "@/components/GameBoard.vue";

export default {
  name: "GameView",
  components: {
    GameBoard,
  },
};
</script>

<style lang="scss" scoped>
.game-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img {
    margin-bottom: 2rem;
    max-width: 100px; // Adjust as per your logo's dimensions
  }
}
</style>
