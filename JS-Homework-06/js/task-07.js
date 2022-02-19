const fontSizeControlRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

fontSizeControlRef.addEventListener("input", () =>
    {
  textRef.style.fontSize = `${fontSizeControlRef.value}px`;
});
