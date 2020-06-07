//First task
let num = 266219;

//Second task
let arr = String(num).split('');
let result = 1;
for (let i = 0; i < arr.length; i++){
    result *= arr[i];
}
console.log(result);

//third task
let numCube = result ** 3
console.log(numCube);

//fourth task
let secondArr = String(numCube).split('');
alert(secondArr[0] + secondArr[1]);