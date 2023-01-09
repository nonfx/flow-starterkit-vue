module.exports = {
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: (tag) => tag.startsWith("f-"),
        };
        return options;
      });
  },
};
