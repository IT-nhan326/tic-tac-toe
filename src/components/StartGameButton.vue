<template>
  <div class="start-game">
    <transition name="fade">
      <button class="start-button" @click="startGame">Start Game</button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "StartGame",
  methods: {
    startGame() {
      // Navigate to the new game route
      this.$router.push("/start-game");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";
@import "@/assets/styles/_mixins";

.start-game {
  @include center;
  height: 100vh;
}

.start-button {
  background-color: $primary-color;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  @include transition(background-color);

  &:hover {
    background-color: $secondary-color;
  }
}

.fade-enter-active,
.fade-leave-active {
  @include transition(opacity);
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
