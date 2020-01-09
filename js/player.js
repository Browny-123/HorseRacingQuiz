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

  compMovement(containerRightPos, comp, time) {
    var current = 0;
    const intvl = setInterval(() => {
      const x = this[comp].movement.getBoundingClientRect().x;
      const w = this[comp].movement.getBoundingClientRect().width;
      if (x + w >= containerRightPos - 53) {
        this[comp].finished = true;
        return clearInterval(intvl);
      }
      this[comp].movement.style.transform = `translateX(${current}px)`;
      current += time; //1.66
    }, 100);
  }
}
export default Computer;
