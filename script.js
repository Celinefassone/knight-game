const knight = document.getElementById("knight");
const distance = 2;
const speed = 1;
let isMoving = false;
let whichKeyPressed;

function moveCharacter() {
  if (whichKeyPressed === "w" && knight.offsetTop > 0) {
    knight.style.top = knight.offsetTop - distance + "px";
  } else if (whichKeyPressed === "s" && knight.offsetTop < window.innerHeight) {
    knight.style.top = knight.offsetTop + distance + "px";
  } else if (
    whichKeyPressed === "d" &&
    knight.offsetLeft < window.innerWidth - knight.clientWidth / 2
  ) {
    knight.style.left = knight.offsetLeft + distance + "px";
  } else if (whichKeyPressed === "a" && knight.offsetLeft > 0) {
    knight.style.left = knight.offsetLeft - distance + "px";
  }
}

document.addEventListener("keydown", function (event) {
  whichKeyPressed = event.key;
  isMoving = true;
});

document.addEventListener("keyup", function (event) {
  whichKeyPressed = event.key;
  isMoving = false;
});

setInterval(function () {
  if (isMoving) moveCharacter();
}, speed);
