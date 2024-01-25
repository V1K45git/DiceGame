function fun() {
  let playA = Math.floor(Math.random() * 6) + 1;
  let playB = Math.floor(Math.random() * 6) + 1;
  document.getElementById("img1").src = "img/d" + playA + ".png";
  document.getElementById("img2").src = "img/d" + playB + ".png";
  let element = document.getElementById("h1tag");
  if (playA > playB) element.innerHTML = "PLAYER A WIN";
  else if (playA < playB) element.innerHTML = "PLAYER B WIN";
  else element.innerHTML = "MATCH TIE";
}
