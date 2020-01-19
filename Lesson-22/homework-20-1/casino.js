class Casino {
  constructor() {
    this.lines = [];
    this.result = null;
  }
  createRandomLineFrom(arr) {
    return arr.map(() => Math.ceil(Math.random() * (arr.length - 1)));
  }
  fillLines(linesAmount, fromArray) {
    this.lines = Array(linesAmount)
      .fill(1)
      .map(() => this.createRandomLineFrom(fromArray));
  }
  checkLines(lineToCheck) {
    let lineIndex = lineToCheck - 1;
    let value = this.lines[0][lineIndex];
    return (this.result = this.lines.every((line) => line[lineIndex] === value));
  }
}

