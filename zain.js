let day = "tuesday";
switch (day){
    case "monday":
        console.log("to day is monday")
        break;
        case "tuesday":
            console.log("to day is tuesday")
            break;
            case "wensday":
            console.log("to day is")
            default:
                console.log("look foreward")
}


//=====================================================================================================


let month ="january";
switch (month){
    case "january":
        console.log("first month")
        break;
        case "febuary":
            console.log("second month")
            break;
            case "march":
        console.log("3 month")
        break;
        case "april":
            console.log("4 month")
            break;
            default:
            console.log("more than 5")
} 




























//===================================================================


let marks = 50;
 switch (false) {
    case (marks >=90 && marks <=100):
        console.log("student get A+ gread");
        break;
        case (marks>=75 && marks <=90):
            console.log("student get A gread");
            break;
            case (marks>=60 && marks<=75):
            console.log("student get B gread")
            break;
            case(marks>=45 && marks<=60 ):
            console.log("student get C gread ");
            break;
            default:
                console.log("student not performed well")
 }


//=====================================================================================================





 let drink = "coca";
 switch (true){
    case(drink === "coca"|| drink=== "fanta") :
    console.log("bring to home");
    break;
    case(drink==="pepsi" || drink==="sting") :
    console.log("oky bring");
    break;
    default:
        console.log("bring all except dew")

}




//====================================================================================================






let num = 70;
if (num>=90){
    console.log("you get A+ gread")
}else if(num>=75){
    console.log("you get A gread")
}else if(num>=60){
    console.log("you get B gread")
}else if(num>=50){
    console.log("you get c gread")
}else{
    console.log("you are not qualify")
}







//==========================================================================================================







// for(let i=0; i<10; i++) { 
//     console.log(i)
// }




//=======================================================



// let colors =[ "red"];
// for (let i = o ; i < colors.length; i++){
//     console.log(colors[i]);
// }




//================================================



// let i = 0;
// while (i<=20){
//     console.log(i);
//     i++;
// }




//=============================================================



// function



function numb(b , a) {
    return a+b;
    
}
let add=numb(5 , 7)
console.log(add)








function sumOfTwoNumber(callback) {
    let x = 4;
    callback(x);
}
function finalResult(x) {
    console.log(x + x);
}
// Pass the function reference, not the result of its invocation
sumOfTwoNumber(finalResult);














// //=========================================================================







function mult (a , b){
    return a*b;

}
let number= mult(2 , 5);
console.log(number);