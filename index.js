var oneI = document.querySelector("#oneI");
var twoI = document.querySelector("#twoI");
var btn = document.querySelector("#btn");
var outP = document.querySelector("#outP");


btn.addEventListener("click", clickEventHandler);
function clickEventHandler(){

var input1 = oneI.value;
var input2 = twoI.value;

    outP.innerText = (input1 * input2);
}