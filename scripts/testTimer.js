document.addEventListener("DOMContentLoaded", function () {
    const countdownText = document.querySelector('.testo-cerchio .countdown');
    const label = document.querySelector('.testo-cerchio .label');

    const startTimer = (durationSeconds) => {
        let secondsRemaining = durationSeconds;

        
        const updateTimer = () => {
            if (secondsRemaining >= 0) {
                countdownText.textContent = secondsRemaining;
                label.textContent = 'secondi';

            secondsRemaining--;
            } else {
            clearInterval(timerInterval);
        }
        }
        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
    }
    startTimer(60);
});

// function riempiBarra(percentuale) {
//     const riempimento = document.querySelector('.riempimento');
//     const percentualeElemento = document.querySelector('.percentuale');

//     const circonferenza = riempimento.getTotalLength();
//     const lunghezzaRiempimento = circonferenza * (1 - percentuale / 100);

//     riempimento.style.strokeDashoffset = lunghezzaRiempimento;
//     percentualeElemento.textContent = percentuale + '%';
//   }
//   riempiBarra(100);

  
