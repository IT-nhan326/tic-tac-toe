<template>
  <BasicModal
    @close="$emit('close')"
    @accept="$emit('accept')"
  >
    <template #modal-title>{{ title }}</template>
    <template #close-btn>{{ closeBtn }}</template>
    <template #accept-btn>{{ acceptBtn }}</template>
  </BasicModal>
</template>

<script>
import BasicModal from "@/components/dumb/BasicModal.vue";

export default {
  components: {
    BasicModal,
  },

  data() {
    return {
      title: "RESTART GAME?",
      closeBtn: "NO, CANCEL",
      acceptBtn: "YES",
    };
  },
};
</script>