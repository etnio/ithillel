const server = new Server();
const serverArr = server.randomArray()
console.log(serverArr);

// The solution

function convertArr() {
    this.arrayNew = [];
    for (let i = 0; i < serverArr.length; i++) {
        arrayNew.push(`${i+1}:${serverArr[i]}`);
    }
    return arrayNew;
}
console.log(convertArr());

