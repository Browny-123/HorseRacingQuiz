import Game from "../js/game.js";
import Computer from "../js/player.js";

let generalQuestions = [
  { question: "Press enter to kick start the horse", answer: "" },
  { question: "What is the name of the German airline?", answer: "Lufthansa" },
  {
    question: "In which European city can you find the home of Anne Frank?",
    answer: "Amsterdam"
  },
  { question: "	How many stars has the American flag got?", answer: "Fifty" },
  { question: "How long is the Great Wall of China?	", answer: "4000 miles" },
  { question: "Who invented Ferrari?", answer: "Enzo Ferrari" },
  {
    question: "According to the Bible, who was the first murderer?	",
    answer: "Cain"
  },
  { question: "What is the largest number of five digits?", answer: "99999" },
  { question: "In what year did princess diana die?	", answer: "1997" },
  {
    question:
      "Which famous British women murderer of the 19th century was never arrested?",
    answer: "Jack the Ripper"
  },
  { question: "Which nuts are used in marzipan?", answer: "Almonds" },
  {
    question: "Which country is the origin of the cocktail Mojito?",
    answer: "Cuba"
  },
  { question: "How many calories does a glass of water contain?", answer: "0" },
  { question: "What is called a meal in open air?", answer: "Picnic" },
  {
    question: "Which country is the origin of the Stella beer?",
    answer: "Belgium"
  },
  {
    question: "What is the capital city of England?",
    answer: "London"
  }
];

console.log(generalQuestions.length);

let anagrams = [
  { question: "Press enter to kick start the horse", answer: "" },
  { question: "MLTH", answer: "HTML" },
  { question: "MUSANGS", answer: "Samsung" },
  { question: "HPEON", answer: "Phone" },
  { question: "SCS", answer: "CSS" },
  { question: "KINE", answer: "Nike" },
  { question: "PPLAE", answer: "Apple" },
  { question: "VESNE", answer: "Seven" },
  { question: "EFOCFE", answer: "Coffee" },
  { question: "TCHAW", answer: "Watch" },
  { question: "OGLGEG", answer: "Google" },
  { question: "HAIRC", answer: "Chair" },
  { question: "CTRIPAJVAS", answer: "Javascript" },
  { question: "SLAGS", answer: "Glass" },
  { question: "LSKCA", answer: "Slack" }
];

const answer = document.querySelector(".answer-input");
const container = document.querySelector(".container");
const question = document.querySelector(".question-information");
const startGeneral = document.querySelector(".general-quiz");
const startAnagram = document.querySelector(".anagram-quiz");
const startHidden = document.querySelector(".start-screen");
const mainHidden = document.querySelector(".main-game");
const endGameHidden = document.querySelector(".end-game");
const endGameText = document.querySelector(".end-game-text");
const endButton = document.querySelector(".return-home");
const computer = new Computer();
let game;

startAnagram.onclick = chooseAndStart;
startGeneral.onclick = chooseAndStart;
endButton.onclick = changeToMainScreen;

function chooseAndStart(e) {
  if (e.target.innerHTML === "General Quiz") {
    game = new Game(generalQuestions, container);
    startProcedure();
  } else {
    game = new Game(anagrams, container);
    startProcedure();
  }
}

answer.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    submitAnswer();
  }
});

function startProcedure() {
  const r = container.getBoundingClientRect().right;
  startHidden.classList.toggle("is-hidden");
  mainHidden.classList.toggle("is-hidden");
  game.newQuestion(question);
  computer.comp1Movement(r);
  computer.comp2Movement(r);
  computer.comp3Movement(r);
}

function submitAnswer() {
  game.checkAnswer(answer, function(value) {
    if (!value) {
      game.newQuestion(question);
    } else {
      checking();
    }
  });
}

function changeToMainScreen() {
  startHidden.classList.toggle("is-hidden");
  endGameHidden.classList.toggle("is-hidden");
}

function checking() {
  if (
    game.player.finished &&
    (!computer.easyComp.finished &&
      !computer.medComp.finished &&
      !computer.hardComp.finished)
  ) {
    togglePage();
    endGameText.textContent = "You Win and beat everyone and finished 1st!!!";
    endGameText.classList.toggle("gold");
  } else if (
    !computer.easyComp.finished &&
    !computer.medComp.finished &&
    (game.player.finished && computer.hardComp.finished)
  ) {
    togglePage();
    endGameText.textContent = "You finished Second!!!";
    endGameText.classList.toggle("silver");
  } else if (
    !computer.easyComp.finished &&
    (computer.medComp.finished &&
      computer.hardComp.finished &&
      game.player.finished)
  ) {
    togglePage();
    endGameText.textContent = "You finished Third!!!";
    endGameText.classList.toggle("bronze");
  } else {
    togglePage();
    endGameText.textContent = "You Lose!!!";
  }
}

function togglePage() {
  mainHidden.classList.toggle("is-hidden");
  endGameHidden.classList.toggle("is-hidden");
}
