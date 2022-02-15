var btn = document.querySelector("#btn");
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2")
var output= document.querySelector("#output");

btn.addEventListener("click", clickEventHandler);
function clickEventHandler(){

    var one = input1.value;
    var two = input2.value;

   output.innerText = (one * two)
   
}
