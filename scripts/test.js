const questions = [
  {
    db_name: "question1",
    title:
      "Qual è il metodo corretto  per stampare il name di ogni oggetto nel seguente array?",
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
  {
    db_name: "question6",
    title: "Il metodo getElementById darà:",
    answer1: {
      text: "Sempre un array di elementi, anche quando nessun elemento viene trovato",
      correct: false,
    },
    answer2: {
      text: "Al massimo un elemento, null se non viene trovato alcun elemento",
      correct: true,
    },
    answer3: {
      text: " Sempre un elemento, avvolto in un array",
      correct: false,
    },
    answer4: {
      text: " Elementi HTMLCollection,",
      correct: false,
    },
  },
  {
    db_name: "question7",
    title: "A cosa serve il primo parametro di element.addEventListener?",
    answer1: {
      text: "Callback",
      correct: false,
    },
    answer2: {
      text: "Event Type",
      correct: true,
    },
    answer3: {
      text: "Caller",
      correct: false,
    },
    answer4: {
      text: "Nessuna delle precedenti",
      correct: false,
    },
  },
  {
    db_name: "question8",
    title: "Qual è il risultato di document.querySelector(`#test`) quando non ci sono elementi cn id test nel DOM?",
    answer1: {
      text: "error",
      correct: false,
    },
    answer2: {
      text: "undefined",
      correct: false,
    },
    answer3: {
      text: "null",
      correct: true,
    },
    answer4: {
      text: "[]",
      correct: false,
    },
  },
  {
    db_name: "question9",
    title: "L'argomento in querySelector...",
    answer1: {
      text: "Può essere omesso",
      correct: false,
    },
    answer2: {
      text: "Dovrebbe essere sempre un selettore CSS valido",
      correct: true,
    },
    answer3: {
      text: "Può essere un oggetto con più proprietà",
      correct: false,
    },
    answer4: {
      text: "Deve essere un id, una classe o un nome di tag",
      correct: false,
    },
  },
  {
    db_name: "question10",
    title: "Quale tra le seguenti è la sintassi corretta può riferirsi a uno script esterno chiamato `formValidation.js`?",
    answer1: {
      text: "<script source = “formValidation.js”>",
      correct: false,
    },
    answer2: {
      text: "<script href = “formValidation.js”>",
      correct: false,
    },
    answer3: {
      text: "<script name = “formValidation.js”>",
      correct: false,
    },
    answer4: {
      text: "<script src = “formValidation.js”>",
      correct: true,
    },
  },
  {
    db_name: "question11",
    title: "Qual è il miglior modo di affrontare una discesa?",
    answer1: { text: "Frenando", correct: false },
    answer2: { text: "Gettandosi dal veicolo in corsa", correct: false },
    answer3: { text: "Ripetendo JavaScript", correct: true },
    answer4: { text: "Pregando", correct: false },
  },
  {
    db_name: "question12",
    title: "Qual è il risultato di document.querySelector(`#migliorCoordinatore`)?",
    answer1: { text: "andreaBuzzanca", correct: true },
    answer2: { text: "Andrea Buzzanca", correct: false },
    answer3: { text: "Buzzanca Andrea", correct: false },
    answer4: { text: "ANDREA BUZZANCA", correct: false },
  },
  {
    db_name: "question13",
    title:
      "Qual è la sintassi corretta dei commenti javascript?",
    answer1: { text: ">>Comment<<", correct: false },
    answer2: { text: "<<Comment>>", correct: false },
    answer3: { text: "//Comment", correct: true },
    answer4: { text: "/Comment",correct: false},
  },
  {
    db_name: "question14",
    title: "Come si scrive uno statement IF che controlli se i é uguale a 5 in Javascript?",
    answer1: { text: "if(i=5){}", correct: false },
    answer2: { text: "if i==5 then", correct: false },
    answer3: { text: "if(i===5){}", correct: true },
    answer4: { text: "if i=5 then", correct: false },
  },
  {
    db_name: "question15",
    title: "Quale di questi NON é un oggetto Javascript?",
    answer1: { text: "const obj = {};", correct: false },
    answer2: { text: `const obj = {name:"John"};`, correct: false },
    answer3: { text: `const obj = {name ="John"};`, correct: true },
    answer4: { text: "const obj = new Object();", correct: false },
  },
  {
    db_name: "question16",
    title: 'Come si chiama una funzione chiamata "foo"?',
    answer1: { text: "function foo()", correct: false, },
    answer2: { text: "foo()", correct: true, },
    answer3: { text: "foo", correct: false, },
    answer4: { text: "call function foo()", correct: false, },
  },
  {
    db_name: "question17",
    title: "Una variabile in Javascript puó venire dichiarata con quale delle seguenti parole chiave?",
    answer1: {text: "new", correct: false, },
    answer2: {text: "int", correct: false, },
    answer3: {text: "string", correct: false, },
    answer4: {text: "const", correct: true,},
  },
  {
    db_name: "question18",
    title: "Quali dei seguenti é stato il primo videogioco creato?",
    answer1: {text: "hamurabi", correct: false, },
    answer2: {text: "tetris", correct: false, },
    answer3: {text: "oxo", correct: true, },
    answer4: {text: "tennis for two", correct: false,},
  },
  { 
    db_name: "question19",
    title: "Nel film WarGames, quale era la password usata per accedere al WOPR(War Operation Pla Response?",
    answer1: {text: "samaritan", correct: false, },
    answer2: {text: "parc", correct: false, },
    answer3: {text: "joshua", correct: false, },
    answer4: {text: "sher", correct: true,},
  }
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
        let currentQuestion = document.querySelector("main h1");
        counter++;

        countQuestions();

        for (question of questions) {
          if (currentQuestion.innerHTML === question.title) {
            let questionID = question.db_name;
            sessionStorage.setItem(questionID, "wrong");
            changeQuestions();
            break;
          }
        }
        secondsRemaining = durationSeconds;
        countdownText.textContent = secondsRemaining;
        // riempiBarra(100);


      }
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

  // riempiBarra(100);

}

function changeQuestions() {
  if (chosenQuestions.length === 0) {
    window.location.assign("/results.html");
    return;
  }

  let currentQuestion = document.querySelector("main h1");
  let buttons = document.querySelectorAll("button");

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
      const riempimento = document.querySelector(".riempimento");
      const pepe = riempimento.cloneNode(true)
      riempimento.replaceWith(pepe)

      clearInterval(timer);
      timerPepe();
    });
  }
}

function countQuestions() {
  const counterElement = document.querySelector("main p:last-child");
  counterElement.innerHTML = `QUESTION ${counter + 1}<span>/10</span>`;
}

// function riempiBarra(percentuale) {

//   const riempimento = document.querySelector(".riempimento");

//   const circonferenza = riempimento.getTotalLength();
//   const lunghezzaRiempimento = circonferenza * (1 - percentuale / 100);

//   riempimento.style.strokeDashoffset = lunghezzaRiempimento;
// }



randomizeQuestions(10);
changeQuestions();
timerPepe();

sessionStorage.clear();
