function funPreset(){
    console.log (`This is the function i am talking`)
}
const func = funPreset();
function login(){
    console.log(`My name is Amadu`);
}
login()

// This is the parameters Function
function fruitProcess(oranges, apples){
    console.log(oranges, apples);
    const juice = (`Juice with ${apples} apples and ${oranges} orange`)
    console.log(juice)
    return juice;
}
const appliJuice = fruitProcess(2,3);
