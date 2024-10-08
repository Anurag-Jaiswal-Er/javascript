// Best documentation for java script website is "TC39.ES"

"use strict"; // treat all js code as newer version
// alert(3+3) // we are using node js not browser because when we write a code on browser console its
// show popup of 6 but in node js its show error 

// NUMBER = 2 to power 53 it is range
//string = ""
//boolean = true/false
//null it a standalone value null is a empty value
//undefined => when we no assinged a value in a variable 
//symbol => 
// object

console.log(typeof "Anurag jaiswal")
console.log(typeof null) // its output is object
console.log(typeof undefined) //its output is undefined 

// Primitive data type

// 1 -> String
// 2 -> Number
// 3 -> Boolean
// 4 -> null
// 5 -> undefined
// 6 -> Symbol  // use to make a unique key or component
// 7 -> BigInt


// Non primitive data type (Reference type) always return type is object function

// 1 -> Array
// 2 -> Objects
// 3 -> Function


// javascript dynamically type langauge

const Heros = ["Thor" , "Ironman" , "Captan America" , "Doctor Strange"] // Array

console.log(Heros)

let myObj = {
    name: "Anurag Jaiswal",
    age: 23,
    email: "anuragjaiswal7355@gmail.com"
} // this is called obj obj declair in key value form

console.log(myObj)

// function

const myFunction = function(){
    console.log("hellow world")
}

myFunction()

// how to write a string in a right form 

let temp1 = "Anurag"
let temp2 = "Jaiswal"
let phoneNumber = "7355481797"

console.log(`My name is ${temp1} ${temp2} and my phone Number is ${phoneNumber}`) // always write string in this form 
