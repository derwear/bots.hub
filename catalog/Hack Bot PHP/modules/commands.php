<?php
function GetOtherCommand($type){
	global $UserInfo;
	switch ($type) {
		case 'relations':
			$message =
			'
			🔥Пнуть [id]
		💥Ударить [id]
		💋Поцеловать [id]
		💞Обнять [id]
		💧Плюнуть [id]
		💦Кончить [id]
		💩Кекать [id]
		💨Пукать [id]';
			break;
		case 'shop':
			$message  = '
			 🚙Транспорт:
			🚗Машины
			🛩Самолеты
			🛵Мотоциклы
			🚁Вертолеты

			 🏘Недвижимость:
			🏠Дома
			🌇Квартиры

			 ♻Прочее:
			📱Телефоны
			🌐Биткоины
			👑Рейтинг
			🔋Фермы
			';
			break;

		default:
			# code...
			break;
	}
	return $message;
}
function GetHelpShop($str){
	global $Nick;
	switch ($str) {
		case 'биткоины':
			$message = $Nick.', для покупки биткоинов напишите "купить биткоины [количество]"';
			break;
		case 'рейтинг':
			$message = $Nick.', для покупки рейтинга напишите "купить рейтинг [количество]"';
			break;
		default:
			# code...
			break;
	}
	return $message;
}
function GetCommands(){
	global $peer_id;

	$message =
	'
🍀 Беседа - беседа с ботом

🎉 Развлекательные:
⠀⠀ 😐 Анекдот
⠀  📉 Курс
  &#4448; 📠 Реши [пример]


💼 Бизнес - статистика
⠀⠀ 💵 Бизнес снять [1-2]
⠀⠀ 👷 Бизнес нанять [1-2] [кол-во]
⠀⠀ ✅ Бизнес улучшить [1-2]

👔 Работа - список работ
⠀⠀ 🔨 Работать
⠀⠀ ❌ Уволиться

🚀 Игры:
     &#4448;🥛 Стакан [1-3] [сумма]
     &#4448;🎰 Казино [сумма]
     &#4448;🎱 Рулетка [red/black/zero] [сумма]
     &#4448;📉 Трейд [вверх/вниз] [сумма]
     &#4448;🎲 Кубик [сумма]
    &#4448; 🦅 Монетка [орел/решка][ставка]
     &#4448;🎰 Автомат [сумма]
 &#4448;😈 /help.cmd() - Взлом игроков
📚 Основные:
   &#4448; 👾 Сервер помощь
    &#4448;👾 Вывести матрицы
   &#4448; 💡 Аноним помощь
&#4448;👾 Хаки - Ваша хак-машина
⠀⠀  📖 Профиль
⠀⠀  💲 Баланс
⠀⠀  💰 Банк [сумма/снять сумма]
⠀⠀  👑 Рейтинг - ваш рейтинг
⠀⠀  ✒ Ник [ник/вкл/выкл]
⠀⠀  🛒 Магазин
⠀⠀  🔋 Ферма - биткоин ферма
⠀⠀  💸 Продать [предмет]
⠀⠀  🤝 Передать [id] [сумма]
⠀⠀  🏆 Топ
⠀⠀  🎁 Донат [Не доступен]
⠀⠀  👫 Друг - деньги за друзей
⠀⠀  💎 Бонус - ежедневный бонус

  🔁 Клавиатура [Вкл/Выкл]
  🔁 Кнопка [кнопка, кнопки Очистить]
	⚡  Уведомления вкл/выкл [Подписаться на рассылку/отписаться]
  🆘 Репорт [текст] - ошибки или пожелания

	';
	return $message;
}
?>
