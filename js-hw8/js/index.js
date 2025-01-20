// 1
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (let i = 0; i < friends.length; i++) {
  string = string + friends[i];
  string += ",";
  console.log(friends[i]);
}
let string1 = "";
string1 = friends.join();
console.log(string1);
// 2
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5"
];
// Видалення
const cardToRemove = "Карточка-3";
console.log(cards.indexOf(cardToRemove))
cards.splice(2, 1)
console.log(cards)
// Додавання
const cardToInsert = "Карточка-6";
cards.splice(5, 0, cardToInsert)
console.log(cards)
// Оновлення
const cardToUpdate = "Карточка-4";
console.log(cards.indexOf(cardToUpdate))
cards.splice(2, 1, 'Карточка-44')
console.log(cards)