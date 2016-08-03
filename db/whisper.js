/**
 * Created by Administrator on 2016/7/29.
 */
let db = require('./mysqlBlog');
let config = require('../config/config');
let sequelize = require('sequelize');
module.exports = db.define("whisper", {
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: sequelize.STRING},
    date: {type: sequelize.DATE}
}, config.blog.defineModelOpt);