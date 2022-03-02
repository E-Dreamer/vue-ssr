/*
 * @Author: E-Dreamer
 * @Date: 2022-03-02 11:25:45
 * @LastEditTime: 2022-03-02 13:48:13
 * @LastEditors: E-Dreamer
 * @Description:
 */
const express = require('express');

const fs = require('fs');
// const Koa = require('koa')
const path = require('path');
// const koaStatic = require('koa-static')
// const app = new Koa()
const app = express();
const resolve = file => path.resolve(__dirname, file);
// 1. 开放dist目录
// app.use(koaStatic(resolve('./dist')))
app.use(express.static(resolve('./dist')));
//获取一个createBundleRenderer
const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require(resolve('./dist/vue-ssr-server-bundle.json'));
const clientManifest = require(resolve('./dist/vue-ssr-client-manifest.json'));
const template = fs.readFileSync(resolve('./src/html-template.html'), 'utf-8');

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template: template,
    clientManifest: clientManifest
});
// function renderToString(context) {
//   return new Promise((resolve, reject) => {
//     renderer.renderToString(context, (err, html) => {
//       err ? reject(err) : resolve(html)
//     })
//   })
// }

//添加一个中间件来处理所有请求
app.use(async ctx => {
    const context = { title: 'ssr test', url: ctx.url };
    //将context数据渲染为HTML
    // const html = await renderToString(context)
    const html = renderer.renderToString(context);
    ctx.body = html;
});
const port = process.env.PORT || 8090;
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
