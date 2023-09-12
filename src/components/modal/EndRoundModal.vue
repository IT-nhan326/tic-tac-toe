<template>
  <BaseModal
    @close="$emit('close')"
    @accept="$emit('accept')"
  >
    <template #modal-description>{{ modalDescription }}</template>
    <template #modal-title>
      <div :class="iconClass">
        <GameIcon
          v-if="!isRoundTie"
          :icon-name="iconName"
        />
        <div>{{ modalTitle }}</div>
      </div>
    </template>
    <template #close-btn>{{ closeBtn }}</template>
    <template #accept-btn>{{ acceptBtn }}</template>
  </BaseModal>
</template>
  
  <script>
import BaseModal from "@/components/common/BaseModal.vue";
import GameIcon from "@/components/GameIcon.vue";

export default {
  components: {
    BaseModal,
    GameIcon,
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

  computed: {
    isRoundTie() {
      return this.winner === "tie";
    },
    iconName() {
      if (!this.isRoundTie) {
        return this.winner === "X" ? "famark" : "fao";
      }

      return "";
    },
    modalDescription() {
      return this.isRoundTie
        ? ""
        : `PLAYER ${this.playerObject[this.winner]} WINS!`;
    },
    modalTitle() {
      return this.isRoundTie ? "ROUND TIES" : `${this.winner} TAKES THE ROUND`;
    },
    iconClass() {
      return this.winner === "X"
        ? "x-winner"
        : this.winner === "O"
        ? "o-winner"
        : null;
    },
  },
};
</script>

<style lang="scss" scoped>
.x-winner {
  display: flex;
  justify-content: center;
  margin-top: 10%;
  color: #31c3bd;
  font-size: 24px;
}
.o-winner {
  display: flex;
  justify-content: center;
  margin-top: 10%;
  color: #f2b137;
  font-size: 24px;
}
</style>