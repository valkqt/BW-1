function riempiBarra(percentuale) {
    const riempimento = document.querySelector('.riempimento');
    const percentualeElemento = document.querySelector('.percentuale');

    const circonferenza = riempimento.getTotalLength();
    const lunghezzaRiempimento = circonferenza * (1 - percentuale / 100);

    riempimento.style.strokeDashoffset = lunghezzaRiempimento;
    percentualeElemento.textContent = percentuale + '%';
  }
  riempiBarra(100);

  document.addEventListener("DOMContentLoaded", function () {
    const testoCerchio = document.getElementsByClassName("testo-cerchio");

    const startTimer = (durationSeconds) => {
        let secondsRemaining = durationSeconds;

        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        testoCerchio.appendChild(tspan);

        const updateTimer = () => {
            const minutes = Math.floor(secondsRemaining / 60);
            const seconds = secondsRemaining % 60;
            tspan.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            secondsRemaining--;
        }
        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
    }
    startTimer(60);
});
