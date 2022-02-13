var A = document.querySelector("#A")
var B = document.querySelector("#B")
var btn = document.querySelector("#btn")
Button.addEventListener("click", eventhender)

function eventhender() {
    var input1 = A.value
    var input2 = B.value

    console.log(input1 * input2)

}