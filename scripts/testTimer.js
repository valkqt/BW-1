function riempiBarra(percentuale) {
    const riempimento = document.querySelector('.riempimento');
    const percentualeElemento = document.querySelector('.percentuale');

    const circonferenza = riempimento.getTotalLength();
    const lunghezzaRiempimento = circonferenza * (1 - percentuale / 100);

    riempimento.style.strokeDashoffset = lunghezzaRiempimento;
    percentualeElemento.textContent = percentuale + '%';
  }
  riempiBarra(100);