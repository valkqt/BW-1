
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


}

parseStorage();
postResults()