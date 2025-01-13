// function calculategrade(marks) {
//     if(marks>=90 && marks <=100){
//         return"A"
//     }else if(marks>=80 && marks <=90){
//         return "B"
//     }else if(marks>=60 && marks <=70){
//         return "c"
//     }else if(marks>=50 && marks <=60){
//         return "d"
//     }else{
//         console.log("fail")
//     }

        
    
// }
// console.log(calculategrade(70));


// //======================================================================



let students = [
    { name: "zain", interview: true },
    { name: "khan", interview: false },
    { name: "ali", interview: true },
    { name: "wow", interview: false },
    { name: "ahmd", interview: true },
    { name: "Emman", interview: false },
    { name: "Tomoo", interview: true },
    { name: "Shahza", interview: false },
    { name: "ehsan", interview: true },
    { name: "khan", interview: false }
  ];
  let studentsWhoDidntGiveInterview = students.filter(student => !student.interview);
  console.log(studentsWhoDidntGiveInterview);

  studentsWhoDidntGiveInterview.push({ name: "zainoo", interview: false });
  console.log(studentsWhoDidntGiveInterview)
  
  let result = studentsWhoDidntGiveInterview.map(student => {
    return {
        name: student.name,
        status: "Didn't interview"
      }
  })

    console.log(result)

//=========================================

    let names=["sartaj","sartaj", "zain","ali", "ahmed" ]
      let person=names.filter((name) => {
        return name === "sartaj";
      }).map(name=> name.toUpperCase());
      console.log(person)


    
      //object====


   let intrduction= {
     fname:"shah",
     lname:"alam",
     fullname:function () {
        return this.fname ," ", this.lname 
     } ,

     agr:19,
     city:"gilgit",
    }
    console.log(intrduction.fullname())


   