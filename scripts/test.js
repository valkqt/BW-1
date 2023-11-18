const chosenQuestions = [];
let counter = 1;
let timer;
let numberOfQuestions = 10

// n can be any number of questions, so long as it doesn't exceed the number of questions in the database

function randomizeQuestions(n) {
  for (let i = 0; i < n; i++) {
    let entry = questions[Math.floor(Math.random() * questions.length)];
    if (!chosenQuestions.includes(entry)) {
      chosenQuestions.push(entry);
    } else {
      i--;
    }
  }
}


function timeCounter() {
  const countdownText = document.querySelector(".testo-cerchio .countdown");
  const label = document.querySelector(".testo-cerchio .label");

  const startTimer = (durationSeconds) => {
    let secondsRemaining = durationSeconds;

    const updateTimer = () => {

      // condition for time out and timer reset

      if (secondsRemaining === 0) {
        let currentQuestion = document.querySelector("main h1");

        countQuestions(numberOfQuestions);

        for (let question of questions) {
          if (currentQuestion.innerHTML === question.title) {
            let questionID = question.db_name;
            sessionStorage.setItem(questionID, "wrong");
            changeQuestions();
            break;
          }
        }
        secondsRemaining = durationSeconds;
        countdownText.textContent = secondsRemaining;
      }

      // countdown

      if (secondsRemaining >= 0) {
        countdownText.textContent = secondsRemaining;

        label.textContent = "secondi";

        secondsRemaining--;
      }
    };
    updateTimer();
    timer = setInterval(updateTimer, 1000);
  };
  startTimer(30);
}

// series of sub-functions for the test, to improve readability


function findQuestion(title) {
  for (let question of questions) {
    if (title === question.title) {
      return question;
    }
  }
}

function replaceButton(element) {
  const newBtn = element.cloneNode(true);
  element.replaceWith(newBtn);
}

function replaceTimer() {
  const oldTimer = document.querySelector(".riempimento");
  const newTimer = oldTimer.cloneNode(true);
  oldTimer.replaceWith(newTimer);
}

function countQuestions(n) {
  const counterElement = document.querySelector("main p:last-child");
  counterElement.innerHTML = `QUESTION ${counter + 1}<span>/${n}</span>`;
  if (counter < n - 1) {
    counter++;
  }
}

function initializeTimer() {
  replaceTimer();
  clearInterval(timer);
  timeCounter();
}

function randomizePosition(object) {

  const answers = []

  for (let key in object) {
    if (key.startsWith('answer')) {
      answers.push(object[key].text)
    }
  }

  const randomized = []
  const numberOfAnswers = answers.length

  while (randomized.length < numberOfAnswers) {

    let randomIndex = Math.floor(Math.random()*answers.length)
    randomized.push(answers[randomIndex])
    answers.splice(randomIndex,1)

  }
  return randomized
}

function clearButtons(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

function generateButtons(container, object) {
  for (let key in object) {
    if (key.startsWith('answer')){
      const elem = document.createElement('button')
      container.appendChild(elem)
    }
  }


}

function changeQuestions(container) {  

  // termination condition

  if (chosenQuestions.length === 0) {
    window.location.assign("/results.html");
    return;
  }

  const answerContainer = document.querySelector('.risposte')
  clearButtons(answerContainer)

  let picked = chosenQuestions[0];

  generateButtons(answerContainer, picked)

  // change text to reflect current question

  let currentQuestion = document.querySelector("main h1");
  let buttons = document.querySelectorAll(".risposte button");

  const randomized = randomizePosition(picked)


  currentQuestion.innerHTML = picked.title


  chosenQuestions.splice(0, 1);

  for (let i = 0; i <= buttons.length-1; i++) {
    let button = buttons[i];
    button.innerText = randomized[i];
    let text = button.innerText;

    // add validation functionality to buttons

    button.addEventListener("click", (e) => {
      let question = findQuestion(currentQuestion.innerHTML);

      // query to check which answer was chosen and if it is the correct one
      for (let answer in question) {
        if (text === question[answer].text) {
          if (question[answer].correct) {
            window.sessionStorage.setItem(question.db_name, "correct");
            countQuestions(numberOfQuestions);
            replaceButton(e.target);
            console.log('pepe')

            changeQuestions();
          } else {
            window.sessionStorage.setItem(question.db_name, "wrong");
            countQuestions(numberOfQuestions);
            replaceButton(e.target);
            console.log('plofi')


            changeQuestions();
          }
        }
      }

      // reset timer

      initializeTimer();
    });
  }
}

// function calls on page load

randomizeQuestions(numberOfQuestions);
changeQuestions(numberOfQuestions);
timeCounter();

// sessionStorage in this project is used in place of back-end
sessionStorage.clear();

import {questions} from './db.js'