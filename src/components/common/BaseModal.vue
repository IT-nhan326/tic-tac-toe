<template>
  <div class="modal-container">
    <div class="modal-description">
      <slot name="modal-description"></slot>
    </div>
    <div class="modal-title">
      <slot name="modal-icon"></slot>
      <slot name="modal-title"></slot>
    </div>
    <div class="btn-container">
      <button
        class="close-btn"
        @click="$emit('close')"
      >
        <slot name="close-btn">{{ closeBtn }}</slot>
      </button>
      <button
        class="accept-btn"
        @click="$emit('accept')"
      >
        <slot name="accept-btn">{{ acceptBtn }}</slot>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeBtn: {
      type: String,
      default: "NO, CANCEL",
    },
    acceptBtn: {
      type: String,
      default: "YES",
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: absolute;
  display: flex;
  width: 100%;
  height: 30%;
  background-color: #1f3641;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #979797;
}
.modal-description {
  font-weight: bold;
  font-size: 16px;
  color: #a8bfc9;
  margin: 0;
}
.modal-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}
.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;

  .close-btn,
  .accept-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 139px;
    height: 48px;
    border: none;
    font-weight: bold;
    font-size: 18px;
    color: #1a2a33;
    border-radius: 10px;
    cursor: pointer;
  }
  .close-btn {
    background-color: #a8bfc9;
    box-shadow: 0 4px #6b8997;
  }
  .accept-btn {
    background-color: #f2b137;
    box-shadow: 0 4px #cc8b13;
  }
}
</style>