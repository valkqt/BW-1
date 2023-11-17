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
 const contenitoreRecensione = document.createElement("div")
 const immagineProfilo = document.createElement("img")
 immagineProfilo.classList.add("immagineProfilo")
 immagineProfilo.src = "assets/omino.png"
 spazioStelle.classList.add("divRecensione")
 
 prendiRecensione.appendChild(immagineProfilo)
 prendiRecensione.appendChild(contenitoreRecensione)
 contenitoreRecensione.appendChild(spazioStelle)
 contenitoreRecensione.appendChild(spazioRecensione)

 for(let i = 0; i < valoreX; i++){
  let stella = document.createElement("img")
  stella.src = "assets/star.svg"
  spazioStelle.appendChild(stella)
  stella.style.transform = "scale(0.5)"
}
 

 spazioRecensione.innerText = prendiCommento
 richiamoCommento.disabled = true;
}


const richiamoCommento = document.querySelector(".bottoneIlluminato")
richiamoCommento.addEventListener("click", generaCommento)



