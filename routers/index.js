/**
 * Created by Administrator on 2016/7/28.
 */
let router = require('koa-router')();
let Func = require('./func');
module.exports = function (app) {
    router.get('/', function*() {
        yield this.render('homepage');
    });
    router.get('/whisper', function*() {
        let whispers = yield Func.findWhisper();
        yield this.render('whisper', {whispers: whispers});
    });
    router.get('/tech', function*() {
        let lists = yield Func.techList();
        yield this.render('tech', {techs: lists});
    });
    router.get('/admin', function*() {
        yield this.render('admin');
    });
    router.get('/readtech/:id', function*() {
        let article = yield Func.readtech(this.params.id);
        yield this.render('readtech', {article: article});
    });

    router.post('/login', function*() {
        let state = yield Func.login(this.request.body);
        if(state == true ){
                yield this.render('adminchoose');
        }
        else{
            yield this.render('fail');
        }
    });
    router.post('/tech', function*() {
        yield this.render('writeTech');
    });
    router.post('/whisper', function*() {
        yield this.render('writeWhisper');
    });
    router.post('/writeWhisper', function*() {
        yield Func.writeWhisper(this.request.body);
        this.redirect('/');
    });
    router.post('/writeTech', function*() {
        yield Func.writeTech(this.request.body);
        this.redirect('/');
    });
    app.use(router.routes()).use(router.allowedMethods());
};