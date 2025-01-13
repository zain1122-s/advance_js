// let a ={
//     name : "zain",
//     age : "20",
//     lname : "alam",
// }

// console.log(a)

// let b ={
//     fname : "ahmed",
//     age : "azam",
//     class : "8" 
// }

// a.__propt__ = b



//=================================================================//==============================================//






    // console.log("hi");

    // let families = { // {}
    //     name: "saima",
    //     lname: "AKhtar",
    //     introduction() {
    //       return `my name is ${this.name} and last name is ${this.lname}`;
    //     },
    //   };
    //   let families2 = Object.create(families);
    //   // families.name = "Sameer"
    //   families2.age = 20;

    //   families2.getDetail = function () {
    //     return `${this.introduction()} - Age :  ${this.age}`;
    //   };

    //   let families3 = Object.create(families2);
    //   // families.name = "Sameer"
    //   console.log(families3)
    // //   console.log(__proto__);e

    // // constructor   created empty object
    // // super()

    //   class Family {
    //     constructor(){

    //         this.name ="saima";
    //         // this.lname =  "AKhtar";
    //     }
       

       
    //   }
    //   class Family2 extends Family {
    //     constructor(){
    //         super() // parents pro get 
    //         // this.name = "Sameer"
    //         this.age = 30

    //     };
    //   }
    //   let familyData = new Family2()
    //   console.log(familyData.name);










      // let person ={
      //   name: "shahzain",
      //   lname: "alam",
      //   age:"18",
      //   detail (){
      //       return 'my name is ${this.name} and last name is ${this.lname} ' ;

      //   },
      // };
      // let person2 = Object.create(person);
      // person.name="zaino"
      // person.age="20"
      // person2.getdetail = function (){
      //   return '${this.detail} - age : ${this.age}' ;
      // }
      // console.log()












// class user {
//   constructor (username){
//     this.username = username
//   }
//   logme(){
//     console.log('usernAME IS ${this.username}')
//   }
// }
// class teacher extends user {
//   constructor(username, email, password) {
//     super(username)
//     this.email=email,
//     this.password=password,
    
//   }
//   add
// }










class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks. `);
  }
}

const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.makeSound(); 
dog1.bark(); 









