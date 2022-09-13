var currentTheme = new LangTheme();

var themes = {
    "amongus": new AmongUsTheme(),
    "default": new LangTheme()
};

var isLight = false

function setTheme(themeName) {
    currentTheme.unloadTheme(isLight);
    currentTheme = themes[themeName];
    currentTheme.loadTheme(isLight);
}

function toggleLight() {
    currentTheme.unloadTheme(isLight);
    isLight = !isLight;
    currentTheme.loadTheme(isLight);
}