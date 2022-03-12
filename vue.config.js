const path = require("path");
const webpack = require("webpack");

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    const dir = path.resolve(__dirname, "src/assets/icons");

    config.module
      .rule("svg-sprite")
      .test(/\.svg$/)
      .include.add(dir)
      .end() // 包含 icons 目录
      .use("svg-sprite-loader-mod")
      .loader("svg-sprite-loader-mod")
      .options({ extract: false })
      .end()
      .use("svgo-loader")
      .loader("svgo-loader")
      // .tap((options) => ({
      //   ...options,
      //   plugins: [{ removeAttrs: { attrs: "fill" } }],
      // }))
      .end();
    config
      .plugin("svg-sprite")
      .use(require("svg-sprite-loader-mod/plugin"), [{ plainSprite: true }]);
    config.module.rule("svg").exclude.add(dir); // 其他 svg loader 排除 icons 目录
  },
  configureWebpack: {
    //引入jquery
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
    ],
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // "@dropdown-menu-box-shadow": "none",
            // "@dropdown-menu-title-font-size": "20px",
            hack: `true; @import "~@/assets/var.less";`,
          },
        },
      },
    },
  },
};
