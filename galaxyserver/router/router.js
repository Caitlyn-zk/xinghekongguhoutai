// 所有的回调函数的汇总
let login = require("./login")
let news = require("./news")
let dynamic = require("./dynamic")
let alliance = require("./alliance")
let video = require("./video")
let advertise = require('./advertise')
let message = require("./message")
let obj = Object.assign({},login,news,dynamic,alliance,video,advertise,message)
module.exports = obj
