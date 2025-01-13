let student =[
    {name:"shahzain", interview:true},
    {name:"alam", interview:true},
    {name:"zain", interview:true},
    {name:"shah", interview:true},
    {name:"shahzain", interview:false},
    {name:"ahmed", interview:false},
    {name:"adin", interview:false},
    {name:"oula", interview:false},
    
];

let studentdonotgiveint=student.filter(student=>student.interview)
console.log(studentdonotgiveint)

student.push({name:"zaib", interview:true})
console.log(student)

console.log(student.length)


