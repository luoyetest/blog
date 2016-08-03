/**
 * Created by Administrator on 2016/7/29.
 */
let whisper = require('./whisper');
let tech = require('./tech');
let admin = require('./admin');


module.exports = {
    whisperDao: whisper,
    techDao: tech,
    adminDao: admin
};