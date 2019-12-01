var values = [1, 2, 3, 4, 5];

var casino = {
    lines: [],
    result: null,
    createRandomLineFrom: function(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[Math.ceil(Math.random() * arr.length - 1)]);
            
        }
        return newArr;
    },
    fillLines: function(linesAmount, fromArray) {
        for (var i = 0; i < linesAmount; i++) {
            this.lines.push(this.createRandomLineFrom(fromArray))
        }
    },
    checkLines: function () {
        var lineIndex = (this.lines[0].length - 1) / 2;
        for (var i = 1; i < this.lines.length; i++) {
            if (this.lines[i][lineIndex] !==
                this.lines[i - 1][lineIndex]) {
                    return this.result = false
                }
            
        }
        return true;

    }

}

casino.fillLines(3, values);

var result = casino.checkLines();
console.log(casino.lines, result);