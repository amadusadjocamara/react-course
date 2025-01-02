// const url = "https://www.google.com/";
// console.log(url.replace("google"))
// let person = {
//     name: "Amadu",
//     age: 20,
//     gender: "male",
//     address: "Bissau",
//     phone: "72222222",
//     email: "amadu@gmail.com",
//     friends: ["John", "Jane", "Doe"]
// }
// console.log(person);

function displayInfo(args) {
    let output = "";
    if(typeof args.name === "string") {
        output += `Name: ${args.name}\n`;
    }
    if(typeof args.age === "number") {
        output += `Age: ${args.age}\n`;
    }
    console.log(output);
}

displayInfo({
    name: "Amadu",
    age: 20
});

displayInfo({
    name: "John"
});