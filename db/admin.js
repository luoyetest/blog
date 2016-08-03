/**
 * Created by Administrator on 2016/8/1.
 */
let db = require('./mysqlBlog');
let config = require('../config/config');
let sequelize = require('sequelize');
module.exports = db.define("admin", {
    password: {type: sequelize.STRING, primaryKey: true}
}, config.blog.defineModelOpt);