function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createValueRef = document.getElementById("controls");

const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  let size = 20;
  for (let i = 0; i <= 10; i++) {
    size += 10;
    divBox.insertAdjacentHTML(
      "beforeend",
      `<div style="display:flex;background-color:${getRandomHexColor()};width:${size}px;height:${size}px"></div>`
    );
  }
}

const divBox = document.getElementById("boxes");
const boxes = divBox.getElementsByTagName("div");

function destroyBoxes() {
  let i = boxes.length;
  for (let box of boxes) {
    i -= 1;
    boxes[i].remove();
  }
}

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);
