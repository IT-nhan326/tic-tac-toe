<template>
  <BasicModal
    @close="$emit('close')"
    @accept="$emit('accept')"
  >
    <template #modal-description>{{ getModalDescription() }}</template>
    <template #modal-title>{{ getModalTitle() }}</template>
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

  props: {
    winner: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      playerObject: {
        X: 1,
        Y: 2,
      },
      closeBtn: "QUIT",
      acceptBtn: "NEXT ROUND",
    };
  },

  methods: {
    isRoundTie() {
      return this.winner === "tie";
    },
    getModalDescription() {
      return this.isRoundTie()
        ? ""
        : `PLAYER ${this.playerObject[this.winner]} WINS!`;
    },
    getModalTitle() {
      return this.isRoundTie()
        ? "ROUND TIES"
        : `${this.winner} TAKES THE ROUND`;
    },
  },
};
</script>