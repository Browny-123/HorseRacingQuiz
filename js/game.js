class Game {
  constructor(questions, container) {
    this.questions = questions;
    this.score = 1;
    this.questionNumber = {
      number: 2,
      doc: document.querySelector(".question-number")
    };
    this.currentQuestion;
    this.container = {
      container: container,
      borders: container.getBoundingClientRect().right
    };
    this.player = {
      movement: document.querySelector(".horse.one"),
      finished: false
    };
  }

  newQuestion(questionContainer) {
    const random = Math.floor(Math.random() * this.questions.length);
    let randomQuestion = this.questions[random];
    let randomQuestionInfo = randomQuestion.question;
    questionContainer.innerHTML = randomQuestionInfo;
    this.currentQuestion = randomQuestion;
  }

  deleteQuestion() {
    let index = this.questions.indexOf(this.currentQuestion);
    this.questions.splice(index, 1);
  }

  correctAnswer(clbk) {
    this.deleteQuestion();
    const x = this.player.movement.getBoundingClientRect().x;
    const w = this.player.movement.getBoundingClientRect().width;

    console.log(x, w, this.container.borders);
    if (x + w >= this.container.borders - 100) {
      this.player.finished = true;
      clbk(this.player.finished);
      return;
    } else {
      this.player.movement.style.transform = `translateX(${this.score * 100 -
        100}px)`;
      this.score++;
    }
  }

  checkAnswer(answer, clbk) {
    if (
      answer.value.toLowerCase() === this.currentQuestion.answer.toLowerCase()
    ) {
      answer.value = "";
      this.questionNumber.doc.textContent = `Question Number: ${this
        .questionNumber.number++}`;
      this.correctAnswer(clbk);
      clbk();
    } else {
      alert("INCORRECT!!!");
    }
  }
}

export default Game;
