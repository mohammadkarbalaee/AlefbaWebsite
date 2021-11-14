const prompt = require("prompt-sync")();

let componentHeight = prompt('your height: ');
let componentWidth = prompt('your width: ');

const screenHeight = 568;
const screenWidth = 360;

console.log('height:' + (componentHeight / screenHeight * 100) + 'vh;');
console.log('width:' + (componentWidth / screenWidth * 100) + 'vw;');
