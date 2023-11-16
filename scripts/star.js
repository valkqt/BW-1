let punteggioAttuale = 0;
let valoreX 

function highlightStar(starNumber) {
  for (let i = 1; i <= starNumber; i++) {
    const star = document.querySelector(`.star:nth-child(${i})`);
    star.src = "assets/star.svg";
  }
  valoreX = starNumber
}

function resetStars() {
  for (let i = 1; i <= 10; i++) {
    const star = document.querySelector(`.star:nth-child(${i})`);
    if (i > punteggioAttuale) {
      star.src = "assets/darkStar.svg";
    } else {
      star.src = "assets/star.svg";
    }
  }
}

function rateStar(punteggio) {
  punteggioAttuale = punteggio;
  resetStars();
}

function generaCommento() {
 const prendiCommento = document.querySelector(".commentRate").value
 const prendiRecensione = document.getElementById("recensioneUtente")
 const spazioRecensione = document.createElement("p")
 const spazioStelle = document.createElement("div")
 spazioStelle.classList.add("divRecensione")
 prendiRecensione.appendChild(spazioStelle)
 for(let i = 0; i < valoreX; i++){
  let stella = document.createElement("img")
  stella.src = "assets/star.svg"
  spazioStelle.appendChild(stella)
  stella.style.transform = "scale(0.5)"
}
 prendiRecensione.appendChild(spazioRecensione)
 spazioRecensione.innerText = prendiCommento
}


const richiamoCommento = document.querySelector(".bottoneIlluminato")
richiamoCommento.addEventListener("click", generaCommento)



