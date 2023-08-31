<template>
  <FontAwesomeIcon :icon="getIcon" />
</template>

<script>
export default {
  name: "GameIcon",
  props: {
    iconName: {
      type: String,
      default: "faxmark",
    },
  },
  data() {
    return {
      mark: "",
      faxmarkIcon: ["fas", "xmark"],
      faoIcon: ["fas", "o"],
      faRestartIcon: ["fas", "rotate-right"],
    };
  },
  computed: {
    getIcon() {
      switch (this.iconName) {
        case "faxmark":
          return this.faxmarkIcon;
        case "fao":
          return this.faoIcon;
        case "farestart":
          return this.faRestartIcon;
        default:
          return null;
      }
    },
  },
};
</script>