//this file will take care of the getting the values of the button and printing them out on the display
//calling in the buttons
var Display=document.getElementById("display")
const one=document.querySelector("one")
const two=document.querySelector("two")
const three=document.querySelector("three")
const four=document.querySelector("four")
const five=document.querySelector("five")
const six=document.querySelector("six")
const seven=document.querySelector("seven")
const eight=document.querySelector("eight")
const nine=document.querySelector("nine")
const equal=document.querySelector("equal")
const clear=document.querySelector("clear")

//get the text on the buttons



//one.addEventListener("click",populate(One))
//two.addEventListener("click",populate(Two))
//three.addEventListener("click",populate(Three))
//four.addEventListener("click",populate(Four))
//five.addEventListener("click",populate(Five))
//six.addEventListener("click",populate(Six))
//seven.addEventListener("click",populate(Seven))
//eight.addEventListener("click",populate(Eight))
//nine.addEventListener("click",populate(Nine))
//Equal.addEventListener("click",populate(Equal))
//clear.addEventListener("click",populate(Clear))

function populate(input){
    Display.value=input

}


console.log(populate);
