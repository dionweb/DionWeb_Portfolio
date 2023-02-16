// LIGHT - DARK THEME

const btn = document.querySelector(".theme-switch");
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersLightScheme.matches) {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  } else {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  }
  localStorage.setItem("theme", theme);
});

// CHANGE TEXT SIZE

var html = document.documentElement;
var fontSize = "18";

const fontSizeNow = document.getElementById("fontSizeNow");
fontSizeNow.innerHTML = fontSize + "px";

const decreaseText = document.getElementById("decreaseText");
const defaultText = document.getElementById("defaultText");
const increaseText = document.getElementById("increaseText");

decreaseText.addEventListener("click", function () {
  if (fontSize > 13) {
    fontSize--;
    html.style.fontSize = fontSize + "px";
  }
  fontSizeNow.innerHTML = fontSize + "px";
});

defaultText.addEventListener("click", function () {
  fontSize = "18";
  html.style.fontSize = fontSize + "px";
  fontSizeNow.innerHTML = fontSize + "px";
});

increaseText.addEventListener("click", function () {
  if (fontSize < 25) {
    fontSize++;
    html.style.fontSize = fontSize + "px";
  }
  fontSizeNow.innerHTML = fontSize + "px";
});
