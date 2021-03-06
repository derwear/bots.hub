const fs = require("fs")
const cmds = fs.readdirSync("./commands").filter(x => x.endsWith(".js")).map(x => require("./" + x));
const accs = require("../plugins/autosave.js").accs
module.exports = {
	r: /(help|помощь)$/i,
	f: function (msg, args, vk, bot){
       var lll = ['👥', '🆒', '💡', '⭐', '🆙', '🔧']
       var gone = `

💎 | Операции: 
📱 | Профиль » ваш профиль 
📒 | Банк » банковский счет
💰 | Баланс » ваш баланс 
🔝 | Топ » узнать топ игроков по опыту и балансу 
📮 | Обменять [поинты|доллары|мкоины] на [поинты|доллары|мкоины] >> обмен валют
📌 | Промокод [ключ] » активировать промокод 
💳 | Создать [название] [сумма] » создать промокод (Внимание! Промокод создавать может только администрация)
🤤 | Хочу в беседу » бот добавит вас в беседу бота (no stable)

🎲 | Игровые команды: 
🎰 | Азино [ставка] » рулетка, испытай удачу и выбей 3 инструмента 
💣 | Сапер [ставка] » начать игру
💀 | Викторина [начать|остановить|ответ|подсказка] » игра, в которой нужно отвечать на вопросы
👊 | Дуэль » начать игру (1x1) [Внимание! Ставка - весь ваш баланс]
👗 | Ргб [К/З/Ч] [ставка] » [красное x2], [зеленое x14], [черное x2] тип рулетки 
🍭 | Спот [ставка] » фруктовый автомат 
💱 | Орел/решка [ставка] » игра «Орел решка» 
🎩 | Шляпа » начать игру «угадай, где ботсы» 
💌 | Кости [ставка] » игра «Кости» 
🛒 | Магазин » список товаров
📟 | Купить [ID] » купить товар из магазина
` 
       return bot({text: gone, status: false}) 
	},
	desc: "помощь -- помощь по командам",
	rights: 0,
	type: "all",
	typ: "prosto"
}