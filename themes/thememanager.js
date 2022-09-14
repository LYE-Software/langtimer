var themes = {
    "amongus": new AmongUsTheme(),
    "default": new LangTheme()
};

// if theme and light are not in localStorage, set them to default and false
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "default");
}
if (localStorage.getItem("light") == null) {
    localStorage.setItem("light", "false");
}

// Get the current theme from local storage
var currentTheme = themes[localStorage.getItem("theme")];
var isLight = localStorage.getItem("light") == "true";
currentTheme.loadTheme(isLight);
document.body.style.display = "block";

function setTheme(themeName) {
    currentTheme.unloadTheme(isLight);
    localStorage.setItem("theme", themeName);
    currentTheme = themes[themeName];
    currentTheme.loadTheme(isLight);
}

function toggleLight() {
    currentTheme.unloadTheme(isLight);
    isLight = !isLight;
    localStorage.setItem("light", isLight);
    currentTheme.loadTheme(isLight);
}

function secondTick() {
    currentTheme.secondTick()
}