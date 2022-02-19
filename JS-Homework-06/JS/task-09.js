const randomColor = () =>  {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeColorBtn = document.querySelector(".change-color");
const backgroundColor = document.body;
const colorSubscribe = document.querySelector(".color");

colorSubscribe.textContent = `${randomColor()}`;
changeColorBtn.addEventListener(
  "click",
  () => {
    backgroundColor.style.backgroundColor = colorSubscribe.textContent;
  colorSubscribe.textContent = `${randomColor()}`;}
);
