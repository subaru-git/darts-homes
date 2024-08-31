class CountDrill {
  private leftNumber: number;
  private throws: number[];
  constructor() {
    this.leftNumber = Math.floor(Math.random() * (501 - 1 + 1)) + 1;
    this.throws = [];
    this.throw();
  }
  getLeftNumber() {
    return this.leftNumber;
  }
  throw() {
    if (this.throws.length >= 3) return;
    let singleRange = 20;
    let timesRange = 3;
    if (this.getNowLeftNumber() <= 40) timesRange = 2;
    if (this.getNowLeftNumber() <= 20) {
      singleRange = this.getNowLeftNumber() - (3 - this.throws.length);
      timesRange = 1;
    }
    let score = 0;
    do {
      const single = Math.floor(Math.random() * (singleRange - 1 + 1)) + 1;
      const times = Math.floor(Math.random() * (timesRange - 1 + 1)) + 1;
      score = single * times;
    } while (this.getNowLeftNumber() - score < 0);

    this.throws.push(score);
  }
  getThrows() {
    return this.throws;
  }
  getNowLeftNumber() {
    const left = this.leftNumber - this.throws.reduce((p, c) => p + c, 0);
    return left < 0 ? 0 : left;
  }
  call() {
    return this.throws.reduce((p, c) => p + c, 0);
  }
}

export default CountDrill;
