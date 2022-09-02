// const list = document.querySelector('.output ul');
// const totalBox = document.querySelector('.output p');
let total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';

// No.1
let products = ['パンツ:6.99', '靴下:5.99', 'T シャツ:14.99', 'ズボン:31.99', '靴:23.99'];

// console.log(products[0]);

for (let i = 0; i < products.length; i++) { // No.2

  // No.3
  // itemsには1巡目は'パンツ:6.99'、2巡目は'靴下:5.99'、、、が入る
  // let items = ['パンツ','6.99'];
  // let items = ['靴下','5.99'];
  let items = products[i].split(':');

  let itemName = items[0];
  let itemPrice = items[1];

  // No.4
  // 文字列を数値に変換
  let numberPrice = Number.parseFloat(itemPrice);

  // No.5
  let itemText = 0;
  total += numberPrice;

  // Mo.6
  itemText =itemName + ' — $' +itemPrice;

  // const listItem = document.createElement('li');
  // listItem.textContent = itemText;
  // list.appendChild(listItem);
  console.log(itemText);
}

console.log(27.97 + 31.99);