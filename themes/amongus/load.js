// Append a new div at the end of the body with position absolute and full width and height
class AmongUsTheme extends Theme {
    loadTheme() {
        // Create an absolutely positioned container
        var container = document.createElement("div");
        container.id = "amongusstarscontainer";
        container.style.position = "absolute";
        container.style.width = "100vw";
        container.style.height = "100vh";
        container.style.top = "0";
        container.style.left = "0";
        container.style.zIndex = "-1";
        document.body.appendChild(container);
        
        var div = document.createElement("div");
        div.id = "amongusstars";
        div.style.position = "absolute";
        div.style.width = "100vw";
        div.style.height = "100vh";
        div.style.backgroundColor = "black";
        container.appendChild(div);

        
        // In the div, append 70 divs with class star
        for (var i = 0; i < 70; i++) {
            var star = document.createElement("div");
            star.classList.add("star");
            div.appendChild(star);
        }

        // Add the stylesheet
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "themes/amongus/style.css";
        document.head.appendChild(link);
    }
    
    unloadTheme() {
        document.getElementById("amongusstarscontainer").remove();
    }
}