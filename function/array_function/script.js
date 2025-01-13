let student=[
    {names:"zain", inter:false},
    {names:"ahmed", inter:true},
    {names:"ali", inter:false},
    {names:"ehsan", inter:true},
    {names:"hayan", inter:false},
    {names:"hanan", inter:true}
]
let studentnotGiveInter=student.filter(student=>!student.inter);
console.log(studentnotGiveInter);

student.push=({names:"ahad", inter:true});
console.log(student);

let studentGiveInter=student.filter(student=>student.inter);
console.log(studentGiveInter);

let result= studentnotGiveInter.map(student=>{
    return {
        names:student.names,
        status:"dont give inter"
    }
});
console.log(result)