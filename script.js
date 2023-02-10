const knight = document.getElementById("knight");
const box = document.getElementById("box");
const distance = 2;
const speed = 1;
let isMoving = false;
let whichKeyPressed;
let isInside = false;

function moveCharacter() {
  if (
    whichKeyPressed === "w" &&
    knight.offsetTop > 0 &&
    knight.offsetLeft < window.innerWidth - knight.clientWidth
  ) {
    knight.style.top = knight.offsetTop - distance + "px";
  }

  if (
    whichKeyPressed === "s" &&
    knight.offsetTop < window.innerHeight - knight.clientHeight &&
    knight.offsetLeft < window.innerWidth - knight.clientWidth
  ) {
    knight.style.top = knight.offsetTop + distance + "px";
  }

  if (
    whichKeyPressed === "d" &&
    knight.offsetLeft < window.innerWidth - knight.clientWidth
  ) {
    knight.style.left = knight.offsetLeft + distance + "px";
  }

  if (whichKeyPressed === "a" && knight.offsetLeft > 0) {
    knight.style.left = knight.offsetLeft - distance + "px";
  }

  insideTheBox();
}

function insideTheBox() {
  if (
    knight.offsetTop >= box.offsetTop &&
    knight.offsetLeft >= box.offsetLeft &&
    knight.offsetTop <= box.offsetTop + box.offsetHeight &&
    knight.offsetLeft <= box.offsetLeft + box.offsetWidth
  ) {
    box.style.backgroundColor = "purple";
  } else {
    box.style.backgroundColor = "lightgreen";
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
