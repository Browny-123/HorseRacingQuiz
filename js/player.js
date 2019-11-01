class Computer {
  constructor() {
    this.easyComp = {
      movement: document.querySelector(".horse.two"),
      finished: false
    };
    this.medComp = {
      movement: document.querySelector(".horse.three"),
      finished: false
    };
    this.hardComp = {
      movement: document.querySelector(".horse.four"),
      finished: false
    };
  }

  comp1Movement(containerRightPos) {
    var current = 0;
    const intvl = setInterval(() => {
      const x = this.easyComp.movement.getBoundingClientRect().x;
      const w = this.easyComp.movement.getBoundingClientRect().width;
      if (x + w >= containerRightPos - 53) {
        this.easyComp.finished = true;
        return clearInterval(intvl);
      }
      this.easyComp.movement.style.transform = `translateX(${current}px)`;
      current += 1.66; //1.66
    }, 100);
  }

  comp2Movement(containerRightPos) {
    var current = 0;
    const intvl = setInterval(() => {
      const x = this.medComp.movement.getBoundingClientRect().x;
      const w = this.medComp.movement.getBoundingClientRect().width;
      if (x + w >= containerRightPos - 53) {
        this.medComp.finished = true;
        return clearInterval(intvl);
      }
      this.medComp.movement.style.transform = `translateX(${current}px)`;
      current += 2; // 2
    }, 100);
  }

  comp3Movement(containerRightPos) {
    var current = 0;
    const intvl = setInterval(() => {
      const x = this.hardComp.movement.getBoundingClientRect().x;
      const w = this.hardComp.movement.getBoundingClientRect().width;
      if (x + w >= containerRightPos - 53) {
        this.hardComp.finished = true;
        return clearInterval(intvl);
      }
      this.hardComp.movement.style.transform = `translateX(${current}px)`;
      current += 2.5; // 2.5
    }, 100);
  }
}
export default Computer;
