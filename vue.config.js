const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {

    publicPath: "./", // 基本 URL

    outputDir: "dist", // 构建文件的输出目录

    assetsDir: "static", // 静态资源(js、css、img、fonts)目录

    indexPath: "index.html", //HTML的输出路径

    filenameHashing: true, // 文件名哈希

    lintOnSave: true, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。

    runtimeCompiler: false, // 是否使用带有浏览器内编译器的完整构建版本

    productionSourceMap: true, // 生产环境的 source map

    // integrity:false // 若构建后的文件是部署在 CDN 上的，启用可提供安全性

    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
        // 添加别名
        config.resolve.alias
            .set("vue$", "vue/dist/vue.esm.js")
            .set("@", resolve("src"))
            .set("@assets", resolve("src/assets"))
            .set("@scss", resolve("src/assets/scss"))
            .set("@components", resolve("src/components"))
            .set("@router", resolve("src/router"))
            .set("@store", resolve("src/store"))
            .set("@views", resolve("src/views"))
    },

    css: {
        extract: false, // 将组件内的CSS提取到一个单独的CSS文件
        sourceMap: false,
    },

    devServer: {
        open: false, // 是否打开浏览器
        host: "localhost",
        port: "8080", // 代理断就
        https: false,
        hotOnly: false, // 热更新
        // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。
        // proxy: {
        //     "/api": {
        //         target: "https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets", // 目标代理接口地址
        //         secure: false,
        //         changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        //         // ws: true, // 是否启用websockets
        //         pathRewrite: {
        //             "^/api": "/"
        //         }
        //     }
        // }
    },

    parallel: require("os").cpus().length > 1, //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建

    pwa: {}, // 向 PWA 插件传递选项
}