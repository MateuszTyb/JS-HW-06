const randomColor = () =>  {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let randomRGB = randomColor();

const changeColorBtn = document.querySelector(".change-color");
const backgroundColor = document.body;
const colorSubscribe = document.querySelector(".color");

backgroundColor.style.backgroundColor = randomRGB;
colorSubscribe.textContent = `${randomRGB}`;
changeColorBtn.addEventListener("click", randomColor);
