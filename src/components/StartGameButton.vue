<template>
  <div class="start-game">
    <transition name="fade">
      <button class="start-button" @click="startGame">NEW GAME</button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "StartGame",
  methods: {
    startGame() {
      // Navigate to the new game route
      this.$router.push({ name: "startGame" });
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
  width: 460px;
  height: 60px;
  color: #1a2a33;
  font-weight: 600;
  background-color: #31c3bd;
  border-radius: 10px;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  box-shadow: 0 7px #138c87;

  &:active {
    box-shadow: 0 5px #138c87;
    transform: translateY(4px);
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
