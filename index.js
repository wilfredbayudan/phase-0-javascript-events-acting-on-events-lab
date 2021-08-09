// Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

dodger.style.backgroundColor = "#FF69B4"

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  } else {
    console.log("Can't move left anymore.");
    alert("Where are you going?!");
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left + dodger.offsetWidth < game.offsetWidth) {
    dodger.style.left = `${left + 1}px`;
  } else {
    console.log("Can't move right anymore.");
    alert("Where are you going?!");
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
  } else {
    console.log("Can't move down anymore.");
    alert("Where are you going?!");
  }
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < game.offsetHeight - dodger.offsetHeight) {
    dodger.style.bottom = `${bottom + 1}px`;
  } else {
    console.log("Can't move up anymore.");
    alert("Where are you going?!");
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  } else if (e.key === "ArrowDown") {
    moveDodgerDown();
  } else if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
})