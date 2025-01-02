
const Amadu = {
    name: "Amadu",
    birtheYear: 1998,
    gender: "male",
    occupation: "student",
    address: "Bissau",
    phone: "72222222",
    email: "amadu@gmail.com",
    friends: ["John", "Jane", "Doe"],
    hasDriverLicense: true,

    // calAge: function(age){
    //     return 2025 - age;
    // }

  calcAges: function(){
    this.name = this.name;
    this.birtheYear = 2024 - this.birtheYear;
    this.occupation = this.occupation;
    this.hasDriverLicense = this.hasDriverLicense;
    // console.log(this);
    // return 2025 - this.age;
  }
};
console.log(Amadu.calcAges())
console.log(`${Amadu.name} is ${Amadu.birtheYear} years old and works as a ${Amadu.occupation} and he has ${Amadu.hasDriverLicense ? 'a' : 'not' } drive license. `);
// console.log(Amadu);  
// console.log(Amadu.calcAges());
// console.log(calcAge(1));