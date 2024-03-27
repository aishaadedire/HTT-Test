const btn = document.querySelector(".btn");
const colorHistoryDiv = document.getElementById("color-history");
let colorHistory = [];

const generateRandomColor = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const changeColor = () => {
  const randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorHistory.push(randomColor);
  updateColorHistory();
};

const updateColorHistory = () => {
  colorHistoryDiv.innerHTML = "";
  colorHistory.forEach((color) => {
    const colorBlock = document.createElement("div");
    colorBlock.style.backgroundColor = color;
    colorBlock.textContent = color;
    colorBlock.classList.add("color-block");
    colorHistoryDiv.appendChild(colorBlock);
  });
};

btn.addEventListener("click", changeColor);
