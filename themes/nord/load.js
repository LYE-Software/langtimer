// Append a new div at the end of the body with position absolute and full width and height
class NordTheme extends Theme {
    loadTheme(isLight) {
        // Add the stylesheet
        var link = document.createElement("link");
        link.rel = "stylesheet";
        if (isLight) {
            link.href = "themes/nord/style-light.css";
            document.getElementById("companyLogo").src = "themes/nord/assets/dark.png";
        } else {
            link.href = "themes/nord/style.css";
            document.getElementById("companyLogo").src = "themes/nord/assets/light.png";
        }
        link.id = "nordlightstylesheet";
        document.head.appendChild(link);
    }
    
    unloadTheme(isLight) {
        document.getElementById("nordlightstylesheet").remove();
        document.getElementById("companyLogo").src = "assets/logo.png";
    }
}