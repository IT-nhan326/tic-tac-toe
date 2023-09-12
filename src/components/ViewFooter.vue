<template>
  <div class="view-footer">
    <div class="score-box__x">
      X (P1)
      <span class="score">{{ playerXScore }}</span>
    </div>
    <div class="score-box__o">
      TIES
      <span class="score">{{ tiesScore }}</span>
    </div>
    <div class="score-box__tie">
      O (P2)
      <span class="score">{{ playerOScore }}</span>
    </div>
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
  margin-top: 30px;
}
.score-box {
  &__x,
  &__o,
  &__tie {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 72px;
    border-radius: 9px;
    color: #1a2a33;
    font-size: 16px;
    gap: 10pxl;
    .score {
      font-size: 24px;
      font-weight: bold;
    }
  }

  &__x {
    background-color: #31c3bd;
  }
  &__o {
    background-color: #a8bfc9;
  }
  &__tie {
    background-color: #f2b137;
  }
}
</style>
