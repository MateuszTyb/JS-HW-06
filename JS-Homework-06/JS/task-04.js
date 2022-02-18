
// Licznik składa się ze spana i przycisków, które, po ich kliknięciu,
// powinny zwiększać i zmniejszać jego wartość na jednostkę.
//  Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
//  Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
//  Aktualizuj interfejs nową wartością zmiennej counterValue.


const counterValueRef = document.querySelector("#value");
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');


let counterValue = 0;


const increment = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}
const decrement = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};

decrementBtnRef.addEventListener("click", decrement);
incrementBtnRef.addEventListener("click", increment);
