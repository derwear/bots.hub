let command = {
	pattern: /^(?:ahelp|admin)$/i,
	f: (message, bot) => {
		if(bot.user.group < 5) return bot.reply(`❌ Вы не администратор !`);
		return bot.reply(`ADMIN CMD:
_______________________________________________ ):

ᅠ 
<📜> адмбонус - получить 999.999 

<📜>ban id причина - забанить юзера 

<📜> ня id причина - устроить юзера на топ работу 

<📜> админварн id причина - дать варн юзеру 

<📜> бизб id причина - забрать бизнес у юзера 

<📜>разбанить id причина - разблокировать юзера 

<📜>адмлевел + сообщение пользователя - выдать уровень 

💰 Админ передачи:

<💴>админпередать ID причина - выдать юзеру 60к
<💴>админпередать1 ID причина - выдать юзеру 120к
<💴>админпередать2 ID причина - выдать юзеру 500к
<💴>админпередать3 ID причина - выдать юзеру 1.000.000
<💴>забратьбабло ID причина - забрать все бабло у юзера ( до 1500 $ )
<💊>админлев ID причина - выдать юзеру + 1 лвл
<💎>админбит ID причина - выдать юзеру 100 биткоина
<💎>админбит ID причина - выдать юзеру 500 биткоина
<💎>админбит ID причина - выдать юзеру 1000 биткоина

🚨адм id text - выдать админку юзеру
💥адмз id причина - забрать админку у юзера
🎈випна id text - выдать VIP юзеру ( на данный момент в разработке )



💽 restart - Сделать рестарт бота




			`);
	}
}

module.exports = command;