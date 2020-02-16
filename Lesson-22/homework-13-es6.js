// Добавить возможность проверки всех горизонтальных линий
// Дополнительно: Возможность проверки вертикальных линий

var values = [1, 2, 3, 4, 5];

var casino = {
    lines: [],
    result: null,
    createRandomLineFrom: function (arr) {
        return arr.map(function () {
            return Math.ceil(Math.random() * (arr.length - 1))
        });
    },
    fillLines: function (linesAmount, fromArray) {
        var self = this;
        this.lines = Array(linesAmount).fill(1).map(function () {
            return self.createRandomLineFrom(fromArray);
        });
    },
    checkLines: function (lineToCheck) {

        var lineIndex = lineToCheck - 1;
        value = this.lines[0][lineIndex];
        return this.result = this.lines.every(function (line) {
            return line[lineIndex] === value;

        });

    }
}

casino.fillLines(3, values);

var result = casino.checkLines(2); //check 2-nd line
for (var i = 0; i < casino.lines.length; i++) {
    console.log(casino.lines[i]);
}
console.log(result);