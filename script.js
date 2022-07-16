const container = document.querySelector(".container");

const btn = document.querySelector(".button");
btn.addEventListener("click", drawGrid);

function drawGrid() {
  let sides = prompt("How many pixels per side?");

  container.style.gridTemplateColumns = `repeat(${sides}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${sides}, 1fr)`;

  for (i = 0; i < sides * sides; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", () => pixel.classList.add("color"));

    container.appendChild(pixel);
  }
}

//TO DO:

//Make Drawing the new grid erase the previous one
// in the same function something that iterates through all the previous pixels and deletes them before making the new ones
//Make some rules so the the prompt will only work with numbers
// should have some logic like "is NaN"

//Make the overall thing look nicer
//Nice fonts and move the button to the side
//Title on top

//Adapt to remove the previous grid
// let element = document.getElementById(“”); while (element.firstChild) { element.removeChild(element.firstChild); }
