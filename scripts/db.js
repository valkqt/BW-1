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
    },
    {
      db_name: "question20",
      title: "Cosa significa “responsive” nello Sviluppo Web?",
      answer1: {text: "La pagina web reagisce immediatamente all'input dell'utente",correct: false,},
      answer2: {text: "La pagina web non ha tempi di attesa brevi",correct: false,},
      answer3: {text: "La pagina Web può essere ridimensionata in base alle dimensioni del display",correct: true,},
      answer4: {text: "Nessuna delle precedenti",correct: false,},
    },
      {
        db_name: "question21",title: "Quale proprietà CSS viene utilizzata per stabilire il corolore del testo",
          answer1: {text: "text-color", correct: false,},
          answer2: {text: "text: color()",correct: false,},
          answer3: {text: "color", correct: true,},
          answer4: {text: "font-color",correct: false,},
      },
      {
          db_name: "question22", title: "DOM sta per",
          answer1: {text: "Document Oriented model", correct: false,},
          answer2: {text: "Data object model", correct: true,},
          answer3: {text: "Data object model", correct: false,},
          answer4: {text: "Data oriented model", correct: false,},
      },
      {
          db_name: "question23", title: "Come posso nascondere il testo quanto uso un tag <input>;?",
          answer1: {text: "usando type='password'", correct: false,},
          answer2: {text: "usando type='hidden'", correct: true,},
          answer3: {text: "usando hidden attribute",correct: false,},
          answer4: {text: "usando hidden='true'", correct: false,},
      },
      {
          db_name: "question24", title: "Con quale simbolo viene identificata una pseudo-classe;?",
          answer1: {text: ". (punto)", correct: false,},
          answer2: {text: ": (due punti)", correct: true,},
          answer3: {text: "# (cancelletto)",correct: false,},
          answer4: {text: "; (punto e virgola)", correct: false,}
      },
      {
          db_name: "question25", title: "Se rendo infiline un Paragraph dove sarà visualizzato il Paragraph successivo?",
          answer1: {text: "Sotto al primo Paragraph",correct: true,},
          answer2: {text: "Alla sinistra del primo Paragraph", correct: false,},
          answer3: {text: "Alla destra del primo Paragraph", correct: false,},
          answer4: {text: "La luna nera", correct: false,},
      },
      {
          db_name: "question26", title: "Se ho 12 pesci in una vasca e 5 di loro annegano, quanti ne restano vivi?",
          answer1: {text: "12", correct: true,},
          answer2: {text: "nessuno", correct: false,},
          answer3: {text: "7", correct: false,},
          answer4: {text: "9", correct: false,},
      },
      {
          db_name: "question27",title: "Qual è il giorno più lungo della settimana?",
          answer1: {text: "mercoledì", correct: true,},
          answer2: {text: "Lunedì", correct: false,},
          answer3: {text: "Martedì", correct: false,},
          answer4: {text:"Domenica", correct: false,},
      },
      {
        db_name: "question27",
        title: "Quale delle seguenti espressioni è la più esatta per definire un computer nell'ottica dell'umanistica?",
        answer1: { text: "umanoide", correct: false },
        answer2: { text: "esecutore di ordini", correct: true },
        answer3: { text: "oggetto multifunzionale", correct: false },
        answer4: { text: "nessuna delle risposte date è corretta", correct: false },
      },
      {
        db_name: "question28",
        title: "L'algebra di Boole si applica:",
        answer1: { text: "alle preposizioni del discorso", correct: false },
        answer2: { text: "ai numeri reali", correct: true },
        answer3: { text: "numeri naturali", correct: false },
        answer4: { text: "nessuna delle risposte date è corretta", correct: false },
      },
      {
        db_name: "question29",
        title: 'Come possiamo accedere alla proprietà chiamata "is Driver"?',
        answer1: { text: 'myObject."is Driver', correct: false },
        answer2: { text: 'myObject["is Driver"]"', correct: true },
        answer3: { text: "Entrambi i modi", correct: false },
        answer4: { text: "wee woo pee poo", correct: false },
      },
      {
        db_name: "question30",
        title: "Quale tra i dispositivi di memoria elencati ha la capacità più elevata?",
        answer1: { text: "floppy disk", correct: false },
        answer2: { text: "DVD", correct: true },
        answer3: { text: "Cd-Rom", correct: false },
        answer4: { text: "nessuna delle risposte date è corretta", correct: false },
      },
      {
        db_name: "question31",
        title: "Quale tra questi dispositivi di memoria non è di massa?",
        answer1: { text: "DVD", correct: false },
        answer2: { text: "ram", correct: true },
        answer3: { text: "hard Disk", correct: false },
        answer4: { text: "floppy disk", correct: false },
      },
      {
        db_name: "question32",
        title: "Che cos'è un BYTE",
        answer1: { text: "un insieme di 256 bit", correct: false },
        answer2: { text: "un gruppo di 8 bit", correct: true },
        answer3: { text: "un carattere che può assumere solo i valori 0 e 1", correct: false },
        answer4: { text: "nessuna delle risposte è corretta", correct: false },
      },
      {
        db_name: "question33",
        title: "Cosa si intende con il termine CBT",
        answer1: { text: "corsi d'aula sull'uso del computer", correct: false },
        answer2: { text: "insegnamento tramite la rete internet", correct: true },
        answer3: { text: "competenze di base sulle telecomunicazioni", correct: false },
        answer4: { text: "calcolo di un bilancio trasposto", correct: false },
      },
      {
        db_name: "question34",
        title: "cosa non posso fare con l'Home Banking?",
        answer1: { text: "posso effettuare bonifici", correct: false },
        answer2: { text: "posso prelevare denaro contante", correct: true },
        answer3: { text: "posso effettuare compravendita di titoli", correct: false },
        answer4: { text: "posso consultare il conto corrente", correct: false },
      },
  ];
  
export {questions}