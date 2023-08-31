<template>
  <div class="view-footer">
    <div class="score-box">X(P1) {{ playerXScore }}</div>
    <div class="score-box">TIES {{ tiesScore }}</div>
    <div class="score-box">O(P2) {{ playerOScore }}</div>
  </div>
</template>

<script>
export default {
  props: {
    playerXScore: {
      type: Number,
      default: 0,
    },
    playerOScore: {
      type: Number,
      default: 0,
    },
    tiesScore: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.view-footer {
  display: flex;
  justify-content: space-between;
  width: 460px;
  margin: 30px 10px 10px 10px;

  .score-box {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 72px;
    background-color: #1f3641;
    border-radius: 9px;
    color: #1a2a33;
    font-size: 16px;
    background-color: #f2b137;
  }
}
</style>
