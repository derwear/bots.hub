const url = "https://api.cryazbotss.online/"
const mysql = require("mysql")
const random = require("./functions.js").getRandomInt
const request = require("request")
const config = require("../settings/config.js")
const VK = require('vk-io')
const vk = new VK()
vk.setToken(config.token)
const req = require("request")
var orders = []
var secret = {
    secret1: "r66fzbyo",
    secret2: "cqbcyjnf"
}
var connection = mysql.createConnection({
    host     : '149.202.210.182',
    user     : 'serverforbots',
    password : '3S4n2H6c',
    database : 'shoping_228'
});
connection.connect()
var shop_id = 63014
/*function calc(count, desc, next){
      request.get(`${url}/shop/freekassa2.php?prepare_once=1&shop=${shop_id}&oa=${count}&l=${desc}&key=` + secret.secret1, (e, r, b) => {
           if(e) return
           var data = JSON.parse(b)
           next(data)
      })
}
function gone(user_id, count, info, cmd, nexts){
    var randoms = random(1, 9999999999)
    calc(count, user_id + "-" + randoms, (next) => {
        const orders = require("../data/orders.json")
        orders.push({user_id: user_id, desc: user_id + "-" + randoms, type: info, status: false, cmd: cmd, uid: orders.length})
        const fs = require("fs")
        fs.writeFileSync("./data/orders.json", JSON.stringify(orders, null, "\t"))
        var loli= `https://www.free-kassa.ru/merchant/cash.php?m=${shop_id}&oa=${count}&o=${user_id + "-" + randoms}&s=${next.hash}&us_by=1&us_type=1&lang=ru`
        vk("utils.getShortLink", {url: `https://www.free-kassa.ru/merchant/cash.php?m=${shop_id}&oa=${count}&o=${user_id + "-" + randoms}&s=${next.hash}&us_by=1&us_type=1&lang=ru`}).then((res) => {
            var pizda = res.short_url
            nexts(pizda)
        })
    })
}
function ogo(){
    connection.query('SELECT * FROM `users`', function (error, results, fields) {
        const accs = require("../data/accs.json")
        if (error) throw error;
        const orders = require("../data/orders.json")
        for(var o = 0; o < orders.length; o++){
            if(orders[o].type == "DONAT" && orders[o].status == false){
                orders[o].status = true
            }
            if(orders[o].status == false){
                if(results.some(a=> a.zakaz == orders[o].desc)){
                    orders[o].status = true
                    eval(orders[o].cmd.replace(/%USER_ID%/ig, orders[o].user_id))
                }
            }
        }
    });
}*/
async function calc(count, desc, next){
    request.get(`${url}/shop/freekassa2.php?prepare_once=1&shop=${shop_id}&oa=${count}&l=${desc}&key=` + secret.secret1, (e, r, b) => {
        if(e) return
        var data = JSON.parse(b)
        next(data)
   })
}
async function shoping(user_id, count, cmd, nexts){
    var rand = random(1, 999999)
    calc(count, user_id + "-" + rand, (next) => {
        orders.push({user_id: user_id, desc: user_id + "-" + rand, status: false, cmd: cmd, uid: orders.length})
        var loli = `https://www.free-kassa.ru/merchant/cash.php?m=${shop_id}&oa=${count}&o=${user_id + "-" + rand}&s=${next.hash}&us_by=1&us_type=1&lang=ru`
        vk.api.call("utils.getShortLink", {url: loli}).then((res) => {
            var pizda = res.short_url
            nexts(pizda)
        })
    })
}
module.exports = {
    shoping
}