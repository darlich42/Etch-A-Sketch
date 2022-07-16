let sides;

const btn = document.querySelector(".button");
btn.addEventListener("click", drawGrid);

function drawGrid() {
  let board = document.querySelector(".board");
  let pixels = board.querySelectorAll("div");
  pixels.forEach((div) => div.remove());
  promptSides();
  board.style.gridTemplateColumns = `repeat(${sides}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${sides}, 1fr)`;

  for (i = 0; i < sides * sides; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");

    pixel.addEventListener("mouseover", () => pixel.classList.add("color"));

    board.appendChild(pixel);
  }
}

function promptSides() {
  sides = prompt("How many pixels per side? 1 - 64");
}
//TO DO:

//Make some rules so the the prompt will only work with numbers
// should have some logic like "is NaN"

//Make the overall thing look nicer
//Nice fonts and move the button to the side
//Title on top

//Adapt to remove the previous grid
// let element = document.getElementById(“”); while (element.firstChild) { element.removeChild(element.firstChild); }
