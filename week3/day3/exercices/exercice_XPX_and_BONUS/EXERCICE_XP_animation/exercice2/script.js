function myMove() {
  let elem = document.getElementById("animate");
  let pos = 0;
  let id = setInterval(frame, 1); // move 1px every millisecond

  function frame() {
    if (pos >= 350) { // 400 - 50 = 350 max position
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + "px";
    }
  }
}
