//this file will take care of the getting the values of the button and printing them out on the display
//calling in the buttons
var Display=document.getElementById("display")
//numbers
const one=document.querySelector("one")
const two=document.querySelector("two")
const three=document.querySelector("three")
const four=document.querySelector("four")
const five=document.querySelector("five")
const six=document.querySelector("six")
const seven=document.querySelector("seven")
const eight=document.querySelector("eight")
const nine=document.querySelector("nine")
//operators

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

function populate_with_nums(input){
    Display.value+=input
    let number=Display.value
    return number
}

function populate_with_operator(input){
    Display.value+=input
    let operator=Display.value
    return operator
}


//resets the values and operators
function reset(input){
    Display.value=""
}
//performs the calculations
function operate(){
    RESULT=eval(Display.value)
    console.log(RESULT)
    Display.value=(RESULT)
}




console.log(populate);