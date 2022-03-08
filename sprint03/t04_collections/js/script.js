const guestList = new Set();
guestList.add('Bombass');
guestList.add('Kossyaak');
guestList.add('Popusk');
guestList.add('Abobus');
guestList.add('plitovka');
guestList.add('Klown');
if (guestList.has('Bombass')) {
  console.log('ваше имя уже есть в списке');
} else {
  console.log('успешно занесли вас в список');
  guestList.add('Bombass');
}
console.log(guestList);
console.log(guestList.size);
if (!guestList.has('Kossyaak')) {
  console.log('пользователя не сущевствует');
} else {
  console.log('пользователя пользователь удален');
  guestList.delete('Kossyaak');
}
guestList.clear();
console.log(guestList);

const menu = new Map([
  ['огурец', 500],
  ['помидор', 350],
  ['лук', 50],
]);
menu.set('Конченный идиот', '100грн');
menu.set('Самый сексульный мужик в мире', '300грн');
menu.set('Горячая чикса', '30грн');
menu.set('Злодей британец', '10грн');
menu.set('Так себе шутник', '1120грн');
menu.set('Пубертатная язва', '380грн');
menu.set('Говнюки', '809грн');
console.log(menu);
console.log(menu.entries());

const coinCollection = new WeakSet();

let john = {
  safe1: {
    cell: '20$',
    password: '20394',
  },
};
let pete = {
  safe2: {
    cell: '60$',
    password: '22134',
  },
};
let mary = {
  safe3: {
    cell: '60$',
    password: '32891',
    messages: [
      { text: 'Hello', from: 'John' },
      { text: 'How goes?', from: 'John' },
      { text: 'See you soon', from: 'Alice' },
    ],
  },
};

coinCollection.add(john); 
coinCollection.add(pete); 
coinCollection.add(mary);
console.log(coinCollection);
