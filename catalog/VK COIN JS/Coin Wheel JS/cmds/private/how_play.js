module.exports = {
  tag: ["как играть"],
  button: ["how_play"],
  func: async(context, { vk, _user, game }) => {
    await context.send(`
    	{_user.name} Как играть?!
  Всё просто!
   Если вы поставили на число и выйграли то ставка увиличивается в 17 раз
   Если вы выйграли чет/нечет то ставка умнажается в 2 раза
   если вы выйграли синие/чёрное то ставка умножается в 2 раза
  Правила!
   Не писать админу что подкрутка - блокировка в игре!
   Реклама в любом виде - блокировка в игре
  Правила будут дополнятся
     ❤i love Coin roll❤ 
    `);
  }
};
