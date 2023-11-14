const questions = [
  {
    id: 1,
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
    id: 2,
    title:"Qual è il risultato del codice di seguito, in console?",
    answer1: {text: "undefined", correct: true },
    answer2: {text: "[25, 20]", correct: false },
    answer3: {text: "25", correct: false },
    answer4: {text: "30", correct: false },
  },
  {
    id: 3,
    title: "Come possiamo recuperare il contenuto di questo campo input?",
    answer1: {text: "inputField.content", correct: false },
    answer2: {text: "inputField.innerText", correct: false },
    answer3: {text: "inputField.innerHTML", correct: false },
    answer4: {text: "inputField.value", correct: true },
  },
  {
    id: 4,
    title: 'Come possiamo accedere alla proprietà chiamata "is Driver"?',
    answer1: {text: 'myObject."is Driver', correct: false },
    answer2: {text: 'myObject["is Driver"]"', correct: true },
    answer3: {text: "Entrambi i modi", correct: false },
    answer4: {text: "wee woo pee poo", correct: false },
  },
  {
    id: 5,
    title: "Qual è la differenza tra querySelector e querySelectorAll?",
    answer1:
      {text: "querySelector è stato deprecato, invece dovrebbe essere sempre usato querySelectorAll", correct: false },
    answer2:
      {text: "querySelector ritorna sempre un array, querySelectorAll ritorna al massimo un elemento", correct: false },
    answer3:
      {text: "querySelector ritorna al massimo un elemento, querySelectorAll ritorna sempre un array", correct: true },
    answer4:
      {text: "querySelector può essere utilizzato senza un parametro, mentre querySelectorAll ne ha sempre bisogno", correct: false },
  },
];

const chosenQuestions = [];
let currentQuestion;
const answers = [];

function randomizeQuestions(n) {
  for (i = 0; i < n; i++) {
    let entry = questions[Math.floor(Math.random() * questions.length)];
    if (!chosenQuestions.includes(entry)) {
      chosenQuestions.push(entry);
    } else {
      i--;
    }
  }
  Math.round(Math.random() * n);
}

function changeQuestions() {
  if (chosenQuestions.length === 0) {
    window.location.assign('/results.html')
    console.log('pepe')
  }

  let questionTitle = document.querySelector("main h1");
  let buttons = document.querySelectorAll("button");


  let picked = chosenQuestions[0];
  questionTitle.innerHTML = picked.title;

  for (i = 0; i <= 3; i++) {
    buttons[i].innerText = picked[`answer${i + 1}`].text;
    let text = buttons[i].innerText


    buttons[i].addEventListener("click", (e) => {
      for (question of questions) {
        if (questionTitle.innerHTML === question.title) {
          for (key in question) {
            if (text === question[key].text) {
              if (question[key].correct) {
                answers.push(true)
                chosenQuestions.splice(0, 1)
                const newBtn = e.target.cloneNode(true)
                e.target.replaceWith(newBtn)
                changeQuestions()               
                    
              } else {
                answers.push(false)
                chosenQuestions.splice(0, 1)
                const newBtn = e.target.cloneNode(true)
                e.target.replaceWith(newBtn)
                changeQuestions()
              }
            }
          }
        }
      }
    })
  }
}
randomizeQuestions(3);

changeQuestions();

