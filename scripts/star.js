let isMouseOutEnabled = true;

function mouseOver() {
    let selezioneStella = document.querySelectorAll(".star");

    for (let i = 0; i < selezioneStella.length; i++) {
        selezioneStella[i].addEventListener("mouseover", () => {
            selezioneStella[i].setAttribute("src", "assets/star.svg");

            for (let j = 0; j < i; j++) {
                selezioneStella[j].setAttribute("src", "assets/star.svg");
            }
        });
    }

    let rate = 0;

    for (let i = 0; i < selezioneStella.length; i++) {
        selezioneStella[i].addEventListener("click", () => {
            rate = i;
            
        });
    }

    return rate; 
}

function mouseOut() {
    if (!isMouseOutEnabled) return;

    let selezioneStella = document.querySelectorAll(".star");

    for (let i = 0; i < selezioneStella.length; i++) {
        selezioneStella[i].addEventListener("mouseout", () => {
            selezioneStella[i].setAttribute("src", "assets/darkStar.svg");

            for (let j = 0; j < i; j++) {
                selezioneStella[j].setAttribute("src", "assets/darkStar.svg");
            }
        });
    }
}

function clickStill() {
    let selezioneStella = document.querySelectorAll(".star");

    for (let i = 0; i < selezioneStella.length; i++) {
        selezioneStella[i].addEventListener("click", () => {
            selezioneStella[i].setAttribute("src", "assets/star.svg");

            for (let j = 0; j < i; j++) {
                selezioneStella[j].setAttribute("src", "assets/star.svg");
            }
        });
    }
}

// Disable mouseOut functionality
isMouseOutEnabled = false;

// Call the functions
mouseOver();
mouseOut();
clickStill();
