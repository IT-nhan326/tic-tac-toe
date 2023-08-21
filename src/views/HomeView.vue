<template>
  <div class="home">
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
