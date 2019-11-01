class Game {
  constructor(questions, container) {
    this.questions = questions;
    this.score = 1;
    this.questionNumber = {
      number: 1,
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
    this.answerContainer = document.querySelector(".quiz-section");
  }

  newQuestion(questionContainer) {
    if (this.questionNumber.number === 1) {
      this.currentQuestion = this.questions[0];
      questionContainer.innerHTML = this.currentQuestion.question;
      this.questionNumber.doc.textContent = "Start";
    } else {
      const random = Math.floor(Math.random() * this.questions.length);
      let randomQuestion = this.questions[random];
      let randomQuestionInfo = randomQuestion.question;
      questionContainer.innerHTML = randomQuestionInfo;
      this.currentQuestion = randomQuestion;
    }
  }

  deleteQuestion() {
    let index = this.questions.indexOf(this.currentQuestion);
    this.questions.splice(index, 1);
  }

  correctAnswer(clbk) {
    this.deleteQuestion();
    const x = this.player.movement.getBoundingClientRect().x;
    const w = this.player.movement.getBoundingClientRect().width;
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
      this.changeColorWin();
      answer.value = "";
      this.questionNumber.doc.textContent = `Question Number: ${this
        .questionNumber.number++}`;
      this.correctAnswer(clbk);
      clbk();
    } else {
      this.changeColorLose();
    }
  }

  changeColorWin() {
    let time = 1;
    let winChange = setInterval(() => {
      this.answerContainer.style.backgroundColor = "#2dc937";
      time += 1;
      if (time === 7) {
        this.answerContainer.style.backgroundColor = "white";
        return clearInterval(winChange);
      }
    }, 100);
  }

  changeColorLose() {
    let time = 1;
    let loseChange = setInterval(() => {
      this.answerContainer.style.backgroundColor = "#cc3232";
      time += 1;
      if (time === 7) {
        this.answerContainer.style.backgroundColor = "white";
        return clearInterval(loseChange);
      }
    }, 100);
  }
}

export default Game;
