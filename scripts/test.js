const questions = [
  {
    id: 1,
    title:
      "Qual è il metodo corretto  per stampare il name di ogni oggetti nel seguente array?",
    answer1: "console.log(users.name)",
    answer2: "console.log(users[length].name)",
    answer3: "console.log(users[name])",
    answer4: "un ciclo for contenente console.log(users[i].name)",
    correct: 1
  },
  {
    id: 2,
    title: "Qual è il risultato del codice di seguito, in console?",
    answer1: "undefined",
    answer2: "[25, 20]",
    answer3: "25",
    answer4: "30",
  },
  {
    id: 3,
    title: "Come possiamo recuperare il contenuto di questo campo input?",
    answer1: "inputField.value",
    answer2: "inputField.innerText",
    answer3: "inputField.innerHTML",
    answer4: "inputField.content",
  },
  {
    id: 4,
    title: 'Come possiamo accedere alla proprietà chiamata "is Driver"?',
    answer1: 'myObject["is Driver"]',
    answer2: 'myObject."is Driver"',
    answer3: "Entrambi i modi",
    answer4: "wee woo pee poo",
  },
  {
    id: 5,
    title: "Qual è la differenza tra querySelector e querySelectorAll?",
    answer1:
      "querySelector ritorna al massimo un elemento, querySelectorAll ritorna sempre un array",
    answer2:
      "querySelector ritorna sempre un array, querySelectorAll ritorna al massimo un elemento",
    answer3:
      "querySelector è stato deprecato, invece dovrebbe essere sempre usato querySelectorAll",
    answer4:
      "querySelector può essere utilizzato senza un parametro, mentre querySelectorAll ne ha sempre bisogno",
  },
];

const chosenQuestions = []
let currentQuestion

function randomizeQuestions(n) {
    for (i=0; i < n; i++) {
            let entry = questions[Math.floor(Math.random()*questions.length)]
            if (!chosenQuestions.includes(entry)) {
                chosenQuestions.push(entry)
            } else {
                i--
            }
    }
    Math.round(Math.random()*n)
}

function changeQuestions() {
    const questionTitle = document.querySelector('main h1')
    const buttons = document.querySelectorAll('button')
    const picked = chosenQuestions[0]
    currentQuestion = chosenQuestions.splice(0,1)[0]

    questionTitle.innerHTML = picked.title

    for (i=0; i <= 3; i++) {
        buttons[i].innerText = picked[`answer${i+1}`]
        buttons[i].addEventListener('click', (e) => {
            const answer = e.target.innerText
            for (value of currentQuestion) {
            }
        })
    }
}


randomizeQuestions(3)
changeQuestions()
