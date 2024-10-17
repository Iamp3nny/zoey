function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("ico").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("ico").style.visibility = "visible";
}

var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
  setInterval(show, 85);
}

function show() {
  var body = document.getElementById("body");
  opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 0.1;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
