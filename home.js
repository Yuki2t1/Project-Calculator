let first_number=0
let operator=""
let second_number=0

//this code will be used when i choose to finally utilize maps filters or reduce

//function performs addition
function add(val1,val2){
    res=Number(val1)+Number(val2)
    return res
}
//function performs subtraction
function sub(val1,val2){
    res=val1-val2
    return res 
}
//function performs mulitiplication
function multiply(val1,val2){
    res=val1*val2
    return res
}

//function performs division
function division(val1,val2){
    res=val1/val2
    return res
}

//funciton that performs the needed calculation based upon the operator.
function operate ( ){
    let first_number=prompt("give me the first number")
    let operator=prompt("give me an operator")
    let second_number=prompt("give me secon number")
    if (operator==="+"){
        res=add(first_number,second_number)
    }else if(operator==="-"){
        res=sub(first_number,second_number)
    }else if(operator==="*"){
        res=multiply(first_number,second_number)
    }else if(operator==="/"){
        res=division(first_number,second_number)
    }return res
}


