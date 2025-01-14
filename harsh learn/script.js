var firstName="shahzain";
console.log(firstName);
console.log(firstName[3])
zip=firstName.lengt;
console.log(zip)
may=firstName.length-1
console.log(may)

zano=firstName.toUpperCase();
console.log(zano);

 
firstName="ZAINn"
console.log(firstName)
dip=firstName.toLowerCase();
console.log(dip)

slic=firstName.slice(0,3);
console.log(slic)


// console.log(firstName.length)
name=firstName.length;
console.log(name);




let secName="deepo";
console.log(secName);
 

secName="learning"
console.log(secName)
zepo=secName[3]
console.log(zepo)

const change="deopiz";
console.log(change);
// may=change.length;
// console.log=(may)






// ====================   if else statement ==============



let height = 7;
 if(height>=6){
    console.log("can join army")
 }else{
    console.log("cannnot join army")
 }





let age =12;
// let guessage= +prompt("guess the age");

if(age>=18){
   console.log("you can vote")
}else{
   console.log("you cannot vote")
}







let winnum=20;
let guessnum=+prompt("enter the num");


if(winnum===guessnum){
   console.log("you are winner")
}else{
   if(guessnum>winnum){
      console.log("choose high hight")
   }else{
      console.log("choose high  num")
   }
}




let gdclass=100;

if(gdlass>=90){
   console.log("f")
}else if(gdclass>=80){
   console.log("b")
}else if(gdclass>=70){
   console.log("c")
}else{
   console.log("fail")
}






function gradeClassifier(grade) {
   if (grade >= 90) {
       return "A";
   } else if (grade >= 80) {
       return "B";
   } else if (grade >= 70) {
       return "C";
   } else if (grade >= 60) {
       return "D";
   } else {
       return "F";
   }
}

// Test the function
console.log(gradeClassifier(95)); // Output: A
console.log(gradeClassifier(85)); // Output: B
console.log(gradeClassifier(75)); // Output: C
console.log(gradeClassifier(65)); // Output: D
console.log(gradeClassifier(50)); // Output: F



