<template>
  <button @click="markBlock" class="game-block">
    {{ mark }}
  </button>
</template>

<script>
export default {
  name: "GameBlock",
  data() {
    return {
      mark: "", // This will be 'X' or 'O' based on user's turn
    };
  },
  methods: {
    markBlock() {
      // Logic to mark the block
      this.mark = this.mark ? "" : "X"; // for simplicity, always marking 'X'
    },
  },
};
</script>

<style lang="scss" scoped>
.game-block {
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  font-size: 24px;
  cursor: pointer;
}
</style>
