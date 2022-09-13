// Append a new div at the end of the body with position absolute and full width and height
class AmongUsTheme extends Theme {
    loadTheme() {
        // Create an absolutely positioned container
        var container = document.createElement("div");
        container.id = "amongusstarscontainer";
        container.style.position = "absolute";
        container.style.width = "100vw";
        container.style.height = "100%";
        container.style.top = "0";
        container.style.left = "0";
        container.style.zIndex = "-1";
        container.style.overflow = "hidden";
        document.body.appendChild(container);
        
        var div = document.createElement("div");
        div.id = "amongusstars";
        div.style.position = "absolute";
        div.style.width = "100vw";
        div.style.height = "100%";
        div.style.backgroundColor = "black";
        container.appendChild(div);

        // In the div, append 70 divs with class star
        for (var i = 0; i < 70; i++) {
            var star = document.createElement("div");
            star.classList.add("star");
            div.appendChild(star);
        }

        // Using onScroll, make sure the amongusstarcontainer moves with the page
        // window.onscroll = function() {
        //     var scroll = window.scrollY;
        //     if (scroll < document.body.clientHeight) {
        //         container.style.top = scroll + "px";
        //     }
        // }

        // Add the stylesheet
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "themes/amongus/style.css";
        link.id = "amongusstylesheet";
        document.head.appendChild(link);

        // Using the HTML above, create the object and append it to leftpanel
        var div = document.createElement("div");
        div.id = "amonguscrewmateonleftpanel";
        div.style.position = "absolute";
        div.style.transform = "translateY(-240%)";
        document.getElementById("leftpanel").appendChild(div);

        var img = document.createElement("img");
        img.src = "themes/amongus/assets/hzmy05izlfo51.png.webp";
        img.style.width = "125px";
        img.style.height = "125px";
        div.appendChild(img);

        //
        document.getElementById("companyLogo").src = "themes/amongus/assets/lang-amongus.png";
    }
    
    unloadTheme() {
        document.getElementById("amongusstarscontainer").remove();
        document.getElementById("amongusstylesheet").remove();
        document.getElementById("amonguscrewmateonleftpanel").remove();
        window.onscroll = null;
    }
}