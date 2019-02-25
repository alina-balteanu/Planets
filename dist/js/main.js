window.onload = function() {
  function getRandomOfRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function getRandomFloatRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var starsNr = 10;
  var universeBg = document.querySelector("body");

  for (var i = 0; i < starsNr; i++) {
    let star = document.createElement("span");

    star.classList.add("star"); //baseline class

    star.style.left = getRandomOfRange(0, 100) + "%"; //random position
    star.style.top = getRandomOfRange(0, 100) + "%";

    let starSize = getRandomFloatRange(4, 7).toFixed(3); //random size
    star.style.width = starSize + "px";
    star.style.height = starSize + "px";

    universeBg.appendChild(star);
  }
};
