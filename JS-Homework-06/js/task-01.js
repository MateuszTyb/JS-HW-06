
// Napisz skrypt, który:

 //   Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
 //   Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).

// Wyszukujemy ilość dzieci elementu z ID (#) categories
const listRef = document.querySelector("#categories");
const listItemRef = listRef.children;

// ${listItemRef.length} zwraca ilość elementów obiektu listItemRef
console.log(`Number of categories: ${listItemRef.length}`);

// Wyszukujemy wszystkie (All) tagi h2 wewnątrz rodzica o klasie .item (".item > h2")
// oraz ul (dzieci) rodzica o klasie .item (".item > ul");

const itemTitleRef = document.querySelectorAll(".item > h2");
const categoryListRef = document.querySelectorAll(".item > ul");

// itemTitleRef.forEach((item, index) => { funkja iterująca po tablicy zwracająca wartości item i index
// `Category: ${item.textContent} - nazwa kategorii
// ${categoryListRef[index].children.length  długość tablicy każdego dziecka categoryListRef[index]

itemTitleRef.forEach((item, index) => {
  console.log(
    `Category: ${item.textContent}
      Elements: ${categoryListRef[index].children.length}`
  );
});
