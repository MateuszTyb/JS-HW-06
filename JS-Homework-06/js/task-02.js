// Napisz skrypt, który dla każdego elementu tablicy ingredients:

//    Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
//    Doda nazwę elementu jako jego zawartość tekstową.
//    Doda do elementu klasę item.
//    Po czym umieści wszystkie <li> na liście podczas jednej operacji ul.ingredients.

// torzymy tablicę elementów ingredients
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredintsRef = document.querySelector("#ingredients");

// funkcja createListElem(ele) tworzy elementy listy
// const item = document.createElement("li") z zawartościę ele
// bądącej argumentem funkcji createListElem(ele) item.textContent = ele;
// item.classList.add("item") dodaje klasę item elementowi li 
// zwraca item czyli <li>ele</li>

function createListElem(elem) {
  const item = document.createElement("li");
  item.textContent = elem;
  item.classList.add("item");
  return item;
}

// dodajemy elementy  tablicy ingredients, każdy kolejny element tablicy jest dodawany 
// na końcu listy .append 

listIngredintsRef.append(...ingredients.map(createListElem));

const listIngredints = listIngredintsRef.querySelectorAll("li");

console.log(listIngredints);
