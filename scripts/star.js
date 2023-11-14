
function mouseOver() {
    let selezioneStella = document.querySelectorAll(".star")
    for (let i = 0; i < selezioneStella.length; i++) {
        selezioneStella[i].addEventListener("mouseover", () => {
            
            selezioneStella[i].setAttribute("src", "assets/star.svg")
            for(let j= 0; j < i; j++) {
                selezioneStella[j].setAttribute("src", "assets/star.svg")
            }
        });
    }
}
mouseOver()