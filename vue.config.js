/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-irregular-whitespace */
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const nodeExternals = require('webpack-node-externals');
// 合并 webpack基本配置
const merge = require('lodash.merge');
const TARGET_NODE = process.env.WEBPACK_TARGET === 'node';
const target = TARGET_NODE ? 'serve' : 'client';
const isPro = process.env.NODE_ENV !== 'development'
module.exports = {
    lintOnSave: false,
    publicPath: isPro ? '/' : 'http://127.0.0.1:8080/',
    configureWebpack: () => ({
    // 将 entry 指向应用程序的 serve / client 文件
        entry: `./src/${target}.js`,
        // 对 bundle renderer 提供 source map 支持
        devtool: 'source-map',
        target: TARGET_NODE ? 'node' : 'web',
        node: TARGET_NODE ? undefined : false,
        output: {
            libraryTarget: TARGET_NODE ? 'commonjs2' : undefined
        },
        // 外置化应用程序依赖模块。可以使服务器构建速度更快， // 并生成较小的 bundle 文件。
        externals: TARGET_NODE
            ? nodeExternals({
                // 不要外置化 webpack 需要处理的依赖模块。
                // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
                // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
                allowlist: [/\.css$/]
            })
            : undefined,
        optimization: { splitChunks: TARGET_NODE ? false : undefined },
        plugins: [
            TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()
        ]
    }),
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                merge(options, { optimizeSSR: false });
            });
        // fix ssr hot update bug
        if (TARGET_NODE) {
            config.plugins.delete('hmr');
        }
    }
};
