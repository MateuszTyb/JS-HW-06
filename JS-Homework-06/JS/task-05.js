// Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name - input(zdarzenie input) 
// wstawia jego aktualną wartość do span#name - output.Jeśli pole input jest puste, 
// w spanie powinien wyświetlić się komunikat "Anonymous".

const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", (event) => {
  if (event.target.value) {
    nameOutputRef.textContent = event.target.value;
    nameOutputRef.textContent = input
  } else { nameOutputRef.textContent = `Anonymous`};
});
