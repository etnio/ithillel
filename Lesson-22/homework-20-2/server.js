class Server {
    constructor() {
        this.arrayInitial = [];
    }
    rand(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    randomArray() {
        for (let i = 0; i < this.rand(50, 100); i++) {
            let str = '';
            let amountCharactersInString = this.rand(1, 9)
            for (let n = 0; n < amountCharactersInString; n++) {
                let char = String.fromCodePoint('0x1F3' + this.rand(3, 8) + this.rand(0, 9)); 
                str += char;
            }
            this.arrayInitial.push(str);
        }
        return this.arrayInitial;
    }

}
