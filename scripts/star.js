let punteggioAttuale = 0;

function highlightStar(starNumber) {
  for (let i = 1; i <= starNumber; i++) {
    const star = document.querySelector(`.star:nth-child(${i})`);
    star.src = "assets/star.svg";
  }
}

function resetStars() {
  for (let i = 1; i <= 5; i++) {
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