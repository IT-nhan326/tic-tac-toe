<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="$emit('reset')">&times;</span>
      <p v-if="result === 'tie'">It's a tie!</p>
      <p v-else>Player {{ result }} wins!</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4); // Black with a bit of transparency

  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    width: 80%;
    max-width: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    p {
      font-size: 18px;
      text-align: center;
    }
  }

  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    &:hover,
    &:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
