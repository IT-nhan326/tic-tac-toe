<template>
  <FontAwesomeIcon :icon="icon" />
</template>

<script>
export default {
  name: "GameIcon",
  props: {
    iconName: {
      type: String,
      default: "faXmark",
    },
  },
  data() {
    return {
      mark: "",
      iconObject: {
        faXmark: ["fas", "xmark"],
        faO: ["fas", "o"],
        faRestartIcon: ["fas", "rotate-right"],
      },
    };
  },
  computed: {
    icon() {
      return this.iconObject[this.iconName];
    },
  },
};
</script>