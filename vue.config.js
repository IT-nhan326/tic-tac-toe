const { defineConfig } = require("@vue/cli-service");

const additionalData = `
  @import "@/assets/styles/_variables.scss";
  @import "@/assets/styles/_mixins.scss";
`;

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData,
      },
    },
  },
});
