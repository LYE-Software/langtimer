// Append a new div at the end of the body with position absolute and full width and height
class LangTheme extends Theme {
    loadTheme(isLight) {
        if (isLight) {
            // Add the stylesheet
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "themes/lang/style.css";
            link.id = "langlightstylesheet";
            document.head.appendChild(link);

            document.getElementById("companyLogo").src = "assets/logo-light.png";
        }
    }
    
    unloadTheme(isLight) {
        if (isLight) {
            document.getElementById("langlightstylesheet").remove();
            document.getElementById("companyLogo").src = "assets/logo.png";
        }
    }

    secondTick() {
        
    }
}