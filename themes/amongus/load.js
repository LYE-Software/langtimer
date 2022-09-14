// Append a new div at the end of the body with position absolute and full width and height
class AmongUsTheme extends Theme {
    loadTheme(isLight) {
        // Create an absolutely positioned container
        if (!isLight) {
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
        }

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

        document.getElementById("tasksHeader").innerHTML = "Your Tasks";
    }
    
    unloadTheme(isLight) {
        if (!isLight) {
            document.getElementById("amongusstarscontainer").remove();
        }
        document.getElementById("amongusstylesheet").remove();
        document.getElementById("amonguscrewmateonleftpanel").remove();
        document.getElementById("companyLogo").src = "assets/logo.png";
        document.getElementById("tasksHeader").innerHTML = "Your Assignments";
        window.onscroll = null;
    }

    secondTick() {
        // console.log('sus')
        // document.getElementById("amonguscrewmateonleftpanel").classList.add("amongUsBounce");
        // // remove after 0.5 seconds
        // setTimeout(function() {
        //     document.getElementById("amonguscrewmateonleftpanel").classList.remove("amongUsBounce");
        // })
    }
}