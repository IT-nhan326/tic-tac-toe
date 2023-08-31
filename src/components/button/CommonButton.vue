<template>
  <div>{{ buttonText }}</div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: null,
    },
  },
};
</script>