
const answers = [];

function parseStorage() {
  for (key in sessionStorage) {
    if (key.startsWith(`question`)) {
      answers.push(sessionStorage[key]);
    }
  }
}

function postResults() {
  const correctResult = document.querySelectorAll(".correct p");
  const correctArray = answers.filter((a) => a === "correct");
  correctResult[1].innerText = `${((correctArray.length / answers.length) * 100).toFixed(1)}%`;
  correctResult[2].innerText = `${correctArray.length} / ${answers.length} questions`

  const wrongResult = document.querySelectorAll(".wrong p");
  const wrongArray = answers.filter((a) => a === "wrong");
  wrongResult[1].innerText = `${((wrongArray.length / answers.length) * 100).toFixed(1)}%`;
  wrongResult[2].innerText = `${wrongArray.length} / ${answers.length} questions`




  const percentuale = ((correctArray.length / answers.length) * 100).toFixed(1)
  passOrFail(percentuale)


  const riempimento = document.querySelector('.barrapiena');
  const percentualeElemento = document.querySelector('.correctpercent');

  const circonferenza = riempimento.getTotalLength();
  const lunghezzaRiempimento = circonferenza * (1 - percentuale / 100);

  riempimento.style.strokeDasharray = circonferenza;
  riempimento.style.strokeDashoffset = lunghezzaRiempimento;
  percentualeElemento.textContent = percentuale + '%';
  if (percentuale === 100) {
  riempimento.style.strokeDashoffset = 0;
  }
}

function passOrFail(percentage) {
  const resultHeader = document.querySelector('foreignObject h3')
  const resultPass = document.querySelector('foreignObject span')
  const resultMail = document.querySelector('foreignObject p')
  if (percentage >= 60) {
    resultHeader.innerText = 'Congratulations!'
    resultPass.innerText = 'You passed the exam.'
    resultMail.innerHTML = "We'll send you the certificate <br> in few minutes.<br> Check your email (including <br>promotions / spam folder)"
  } else {
    resultHeader.innerText = 'Too bad!'
    resultPass.innerText = "You didn't pass the exam."
    resultPass.style.color = "#C2128D"
    resultMail.innerText = "Tranquillo è tutto in discesa"
  }
}

function riempiBarra(percentuale) {
  const riempimento = document.querySelector('.barrapiena');
  const percentualeElemento = document.querySelector('.correctpercent');

  const circonferenza = riempimento.getTotalLength();
  const lunghezzaRiempimento = circonferenza * (1 - percentuale / 100);

  riempimento.style.strokeDasharray = circonferenza;
  riempimento.style.strokeDashoffset = lunghezzaRiempimento;
  percentualeElemento.textContent = percentuale + '%';
  if (percentuale === 100) {
  riempimento.style.strokeDashoffset = 0;
  }
}


const rateButton = document.querySelector('.rateUs')
rateButton.addEventListener('click', () => window.location.assign("/rating.html"));

parseStorage();
postResults()
