/**
 * Created by Administrator on 2016/7/29.
 */
let sequelize = require('sequelize');
let whisper = require('../db/index').whisperDao;
let tech = require('../db/index').techDao;
let admin = require('../db/index').adminDao;

class Func {
    static * findWhisper() {
        let result = yield whisper.findAll({
            order: 'id DESC'

        });
        let whispers = [];
        result.forEach(function (value) {
            whispers.push({
                text: value.dataValues.text,
                date: value.dataValues.date.toLocaleDateString()
            });
        });
        return whispers;
    }

    static * techList() {
        let result = yield tech.findAll({
            order: 'id DESC'
        });
        let lists = [];
        result.forEach(function (value) {
            lists.push({
                id: value.dataValues.id,
                title: value.dataValues.title,
                describe: value.dataValues.describe,
                author: value.dataValues.author,
                date: value.dataValues.date.toLocaleDateString()
            });
        });
        return lists;
    }

    static * readtech(id) {
        let result = yield tech.find({
            where: {id: id}
        });

        let article = {
            title: result.dataValues.title,
            author: result.dataValues.author,
            date: result.dataValues.date.toLocaleDateString(),
            text: result.dataValues.text
        };
        return article;
    }

    static * login(body) {
        if (body.login_password == 'qwe789') {
            return true;
        }
        else {
            return false;
        }
    }

    static * writeWhisper(body) {
        let date = new Date().toLocaleDateString();
        let result = yield whisper.create({
            'text': body.text,
            'date': date
        });
    }

    static * writeTech(body){
        let date = new Date().toLocaleDateString();
        let describe = body.text.substring(0, 49);
        describe += '……';
        let result = yield tech.create({
            'text': body.text,
            'title': body.title,
            'author': body.author,
            'describe': describe,
            'date': date
        });
    }
}

module.exports = Func;