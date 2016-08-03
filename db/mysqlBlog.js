/**
 * Created by Administrator on 2016/7/29.
 */
let sequelize = require('sequelize');
const config = require('../config/config');

module.exports = new sequelize(
    config.blog.name,
    config.blog.user,
    config.blog.pwd,
    {
        host: config.blog.host,
        dialect: 'mysql'
    }
);