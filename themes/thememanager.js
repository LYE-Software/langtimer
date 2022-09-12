var currentTheme = new Theme();

var themes = {
    "amongus": new AmongUsTheme(),
    "default": new Theme()
};

function setTheme(themeName) {
    currentTheme.unloadTheme();
    currentTheme = themes[themeName];
    currentTheme.loadTheme();
}

setTheme("amongus")