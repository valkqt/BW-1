const questions = [
  {
    db_name: "question1",
    title:
      "Qual è il metodo corretto  per stampare il name di ogni oggetti nel seguente array?",
    answer1: { text: "console.log(users.name)", correct: false },
    answer2: { text: "console.log(users[length].name)", correct: false },
    answer3: { text: "console.log(users[name])", correct: false },
    answer4: {
      text: "un ciclo for contenente console.log(users[i].name)",
      correct: true,
    },
  },
  {
    db_name: "question2",
    title: "Qual è il risultato del codice di seguito, in console?",
    answer1: { text: "undefined", correct: true },
    answer2: { text: "[25, 20]", correct: false },
    answer3: { text: "25", correct: false },
    answer4: { text: "30", correct: false },
  },
  {
    db_name: "question3",
    title: "Come possiamo recuperare il contenuto di questo campo input?",
    answer1: { text: "inputField.content", correct: false },
    answer2: { text: "inputField.innerText", correct: false },
    answer3: { text: "inputField.innerHTML", correct: false },
    answer4: { text: "inputField.value", correct: true },
  },
  {
    db_name: "question4",
    title: 'Come possiamo accedere alla proprietà chiamata "is Driver"?',
    answer1: { text: 'myObject."is Driver', correct: false },
    answer2: { text: 'myObject["is Driver"]"', correct: true },
    answer3: { text: "Entrambi i modi", correct: false },
    answer4: { text: "wee woo pee poo", correct: false },
  },
  {
    db_name: "question5",
    title: "Qual è la differenza tra querySelector e querySelectorAll?",
    answer1: {
      text: "querySelector è stato deprecato, invece dovrebbe essere sempre usato querySelectorAll",
      correct: false,
    },
    answer2: {
      text: "querySelector ritorna sempre un array, querySelectorAll ritorna al massimo un elemento",
      correct: false,
    },
    answer3: {
      text: "querySelector ritorna al massimo un elemento, querySelectorAll ritorna sempre un array",
      correct: true,
    },
    answer4: {
      text: "querySelector può essere utilizzato senza un parametro, mentre querySelectorAll ne ha sempre bisogno",
      correct: false,
    },
  },
];

const chosenQuestions = [];
let counter = 0;
let timer;

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

function timerPepe() {
  const countdownText = document.querySelector(".testo-cerchio .countdown");
  const label = document.querySelector(".testo-cerchio .label");

  const startTimer = (durationSeconds) => {
    let secondsRemaining = durationSeconds;

    const updateTimer = () => {      

      if (secondsRemaining === 0) {
        
        countdownText.textContent = secondsRemaining;
        secondsRemaining = durationSeconds

        let currentQuestion = document.querySelector("main h1");

        for (i of questions) {
          if (currentQuestion.innerHTML === i.title) {
            let questionID = i.db_name;
            sessionStorage.setItem(questionID, "wrong");
            changeQuestions();
            return
          }
        }
      }
      if (secondsRemaining > 0) {
        countdownText.textContent = secondsRemaining;
        console.log(secondsRemaining)


        label.textContent = "secondi";

        secondsRemaining--;
      } 
    };
    updateTimer();
    timer = setInterval(updateTimer, 1000);
  };
  startTimer(3);
}

function changeQuestions() {
  if (chosenQuestions.length === 0) {
    window.location.assign("/results.html");
    return;
  }

  let currentQuestion = document.querySelector("main h1");
  let buttons = document.querySelectorAll("button");
  console.log(currentQuestion.innerHTML)
  // timerPepe()



  let picked = chosenQuestions[0];
  currentQuestion.innerHTML = picked.title;

  chosenQuestions.splice(0, 1);


  for (let i = 0; i <= 3; i++) {
    let button = buttons[i];
    button.innerText = picked[`answer${i + 1}`].text;
    let text = button.innerText;


    button.addEventListener("click", (e) => {
      for (let question of questions) {
        if (currentQuestion.innerHTML === question.title) {
          for (let answer in question) {
            if (text === question[answer].text) {
              if (question[answer].correct) {
                window.sessionStorage.setItem(question.db_name, "correct");
                counter++;
                countQuestions();


                const newBtn = e.target.cloneNode(true);
                e.target.replaceWith(newBtn);
                changeQuestions();

              } else {
                window.sessionStorage.setItem(question.db_name, "wrong");
                counter++;

                countQuestions();

                const newBtn = e.target.cloneNode(true);
                e.target.replaceWith(newBtn);
                changeQuestions();
              }
            }
          }
        }
      }
    });
  }
}

function countQuestions() {
  const counterElement = document.querySelector("main p:last-child");
  counterElement.innerHTML = `QUESTION ${counter + 1}<span>/10</span>`;
}

function countdown() {}

randomizeQuestions(3);
changeQuestions();
timerPepe()

sessionStorage.clear();
