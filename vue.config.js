const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports = {
    publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./", // 默认'/'，部署应用包时的基本 URL

    // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录

    // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录

    // pages, // 在 multi-page 模式下构建应用

    // lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。

    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本

    productionSourceMap: !IS_PROD, // 生产环境的 source map

    // configureWebpack: config => {
    //     const plugins = [];
    //     config.externals = {
    //         vue: "Vue",
    //         "vue-router": "VueRouter",
    //         vuex: "Vuex",
    //         axios: "axios"
    //     };
    //     config.plugins = [...config.plugins, ...plugins];
    // }, // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。

    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
        // 添加别名
        config.resolve.alias
            .set("vue$", "vue/dist/vue.esm.js")
            .set("@", resolve("src"))
            .set("@apis", resolve("src/apis"))
            .set("@assets", resolve("src/assets"))
            .set("@scss", resolve("src/assets/scss"))
            .set("@components", resolve("src/components"))
            .set("@middlewares", resolve("src/middlewares"))
            .set("@mixins", resolve("src/mixins"))
            .set("@plugins", resolve("src/plugins"))
            .set("@router", resolve("src/router"))
            .set("@store", resolve("src/store"))
            .set("@utils", resolve("src/utils"))
            .set("@views", resolve("src/views"))
            .set("@layouts", resolve("src/layouts"));
    }, // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。

    css: {
        extract: IS_PROD,
        sourceMap: false,
        loaderOptions: {} //向 CSS 相关的 loader 传递选项
    },

    // devServer: {
    //   // overlay: { // 让浏览器 overlay 同时显示警告和错误
    //   //   warnings: true,
    //   //   errors: true
    //   // },
    //   // open: false, // 是否打开浏览器
    //   // host: "localhost",
    //   // port: "8080", // 代理断就
    //   // https: false,
    //   // hotOnly: false, // 热更新
    // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。
    //   proxy: {
    //     "/api": {
    //       target:
    //         "https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets", // 目标代理接口地址
    //       secure: false,
    //       changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
    //       // ws: true, // 是否启用websockets
    //       pathRewrite: {
    //         "^/api": "/"
    //       }
    //     }
    //   }
    // }

    parallel: require("os").cpus().length > 1, //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建

    pwa: {}, // 向 PWA 插件传递选项
}