/**
 * Created by Administrator on 2016/7/28.
 */
let app = require('koa')();
let config = require('./config/config');
let koaBody = require('koa-body');
let koaLogger = require('koa-logger');
let routers=require('./routers/index');
let path = require('path');
let staticServer = require('koa-static');
let render = require('koa-ejs');
render(app, {
    root: path.join(__dirname, 'view'),
    layout: 'menus',
    viewExt: 'html',
    cache: false,
    debug: true
});
app.use(koaBody());
app.use(koaLogger());
app.use(staticServer(path.join(__dirname,'web')));
routers(app);
app.listen(config.port);
console.log("the http server is listening on "+ config.port);
module.exports = app;