var diseases = [
{
	text: "Эта пустая ячейка, болезней нет"
	},
    {
	name: "Головная боль",
	hp: 1,
	energy: 0,
	text: "Расходует 1 дополнительную жизнь при использовании команды",
	id: 1
    },
    {
	name: "Кашель",
	hp: 0,
	energy: 1,
	text: "Расходует 1 дополнительную энергию при использовании команды",
	id: 2
    },
    {
	name: "Температура",
	hp: 1,
	energy: 1,
	text: "Расходует 1 дополнительную жизнь и 1 дополнительную энергию при использовании команды",
	id: 3
	},
	{
	name: "Рак мозга",
	hp: 5,
	energy: 5,
	text: "Расходует 5 доп. жизней  и 5 доп. энергии при использовании команды",
	id: 4
	}
];

module.exports = {
	diseases
	};