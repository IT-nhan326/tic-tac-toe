<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <StartGameButton />
  </div>
</template>

<script>
// @ is an alias to /src
import StartGameButton from "@/components/StartGameButton.vue";

export default {
  name: "HomeView",
  components: {
    StartGameButton,
  },
};
</script>
