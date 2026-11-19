"use strict" // treat all js code as newer version
const accountID = 1234
let accountEmail = "manthan@gmail.com"
var accountPassword = "1234" //we don't generally use var because it have some scope issue. scope means   {}
//accountCity = "jaipur"//we can also use this because it's possiblty

let accountState;
//if we use this before use strct it will work

console.log(accountID);

console.log(accountID, accountEmail, accountPassword);

console.log(accountState); //it will say undefined

//session 2 :-

//data types

let name = "hitesh" //string can be ""
let age = 18 //number is max like 2 ^53
let isLoggedIn = false //boolean true/false

//null -> it's a standalone value
//we use null for temperature because if we use 0 its tmperature
//undefined -> in this we named data type but don't put values in it

//symbol -> it's unique

//object

console.log(typeof age); //answer is number
console.log(typeof "hitesh"); //answer is string
console.log(typeof null); //answer is object
console.log(typeof undefined); //answer is undefined


//session 3 :
//convert data type

//convert into number:-
//tyoe 1
let score = "33"

console.log(typeof score); //console.log(typeof (score));//same output

let valueInNumber = Number(score)//gives output as number

console.log(typeof valueInNumber);

//type 2

let score01 = "33abc"

let valueInNumber01 = Number(score01)// it also gives output as number but why -> so we check value of valueNumber01 by printing
//like console.log(valueNumber01); which gives output as NaN (not a number)

console.log(typeof valueInNumber01);

//type 3

let score02 = null

console.log(typeof score02); //gives answer as object

let valueInNumber02 = Number(score02) //

console.log(valueInNumber02); //gives output as 0

//type 4


let score03 = undefined

console.log(typeof score03); //gives answer as undefined

let valueInNumber03 = Number(score03) //

console.log(valueInNumber03); //gives output as NaN (not a number)

//type 5

let score04 = true

console.log(typeof score04); //gives answer a boolean

let valueInNumber04 = Number(score04) //

console.log(valueInNumber04); //gives output as 1 because true means 1


//type 6

let score05 = "hitesh"

console.log(typeof score05); //give answer as string 

let valueInNumber05 = Number(score05) //

console.log(valueInNumber05); //gives output as NaN (not a number)

//summary

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

//convert into boolean
//01.
let isLogged = 1

let booleanIsLogged = Boolean(isLogged)
console.log(booleanIsLogged); //gives answer as true


//02.
let isLogged01 = "hitesh"

let booleanIsLogged01 = Boolean(isLogged01)
console.log(booleanIsLogged01); //gives answer as true


//03.
let isLogged02 = ""

let booleanIsLogged02 = Boolean(isLogged02)
console.log(booleanIsLogged02); //gives answer as false


//convert into string
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); //gives answer in string
console.log(typeof stringNumber); //gives answer as string


//session 4 :

//Operations
//+, -, %, /, **, *
//normal thinking is good but it has some negetive points

console.log("1" + 2);//answer is 12
console.log(1 + "2");//answer is 12
console.log("1" + 2 + 2);//answer is 122
console.log(1 + 2 + "2");//answer is 32

//for more clearity we use colums like ()
console.log((1+2)**3);

//confusing code
console.log(true); //gives answer a true
//but
console.log(+true); //gives answer as 1
//and also
console.log(false);//gives answer as false
//but
console.log(+false);//gives answer as 0


//session 5 :
//comparison of datatypes :
//always comapre same data types 
console.log("2" > 1); //first compiler change datatype of 2 into number then allow comaprison//answer is true
console.log("02" > 1); //answer is true


//avoid this kind of comaprison
console.log(null > 0);//gives answer as false
console.log(null == 0);//it changes valre of null into 0 and then it compares null in next line code//gives answer as false
console.log(null >= 0);//gives answer as true

//avoid this kind of comaprison
console.log(undefined > 0);//gives answer as false
console.log(undefined == 0);//gives answer as false
console.log(undefined >= 0);//gives answer as false


//===//strict chect it checks with data type also

//session 6 :
//stack and heap memory :

//2 types of momory => stack memory and heap memory
//stack memory use in primitive type 
//heap memory use non-primitive type

let myYouTubeName = "manthan_b"

let anotherNmae = myYouTubeName
console.log(anotherNmae);//gives answer as manthan_b


anotherNmae = "chaiaurcode"

console.log(anotherNmae);//answer as chaiaurcode
console.log(myYouTubeName);//answer as manthan_b
//in above example javascript gives copy of original



let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "manthan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//in above example javascript gives reference only don't make copy

//session 7 :
//string in javascript

//string interpolation :
let name001 = "manthan"
let repoCount = 5

console.log(`Hello my name is ${name001} and my repo count is ${repoCount}`);

//declaration of string
//by declaring this kind of string we get lot of functions like length, toUpperCase(), and lot more
const gameName = new String('hitesh') //type this in console and then call gameName it will show key value pair of all the string characters starting from 0 to num
console.log(gameName[0]); //answer is h

console.log(gameName.length);//answer is 6
console.log(gameName.toUpperCase());//answer is HITESH
console.log(gameName.charAt(2));//answer is t
console.log(gameName.indexOf('t'));//answer is 2
//go to mdn vlogs fro more methods of inbuilt string
//there are lot of string slicing methods available
//want to cutdown empty spaces in given word
const newStr = "   hitesh   "
console.log(newStr.trim());//answer is hitesh

const url = "https://hitesh.com/hitesh%20choudharry"
console.log(url.replace('%20', '-'));//answer is https://hitesh.com/hitesh-choudharry

//session 8 :
//Number and Maths:
//define number
const score06 = 400 //write it on chrome console
console.log(score06);//answer is 400
//we can explicitly create number as object
const balance = new Number(100)//it shows lot of numbers properties
console.log(balance);//answer is [Number: 100]

console.log(balance.toString().length);//answer is 3
console.log(balance.toFixed(1));//answer is 100.0

//**********maths****************//
//it's pre build library

console.log(Math);//answer is Object [Math] {}
//we will get lot of libraries in Math
console.log(Math.abs(-4));//answer is 4

//session 9 :
//date and time
//date is an object it starts from januaru 1, 1970, UTC
let myDate = new Date()
console.log(myDate);//answer is 2026-11-18T18:02:22.517Z
console.log(myDate.toString());//answer is Wed Nov 18 2026 23:32:58 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString());//answer is 11/18/2026
console.log(typeof myDate);// answer is object

let myCreateDate = new Date(2026, 0, 23)
console.log(myCreateDate.toLocaleString());//answer is 1/23/2026, 12:00:00 AM

let myTimeSatamp = Date.now()
console.log(myTimeSatamp);//answer is 1795025355060 it's longdigit of milisecond from 1970 january

//session 10 :
//Array in javascript
//declaration of array
const myArr = [0, 1, 2, 3, 4, 5]
//access any element inside array
console.log(myArr[0]);//answer is 0
//arrays in javascript make shallow copy if we copied 
//shalow copy of an object is a copy whose properties share same references as those of source object
//shalow copy means jo bhi change krenge wo original aaray me bhi change hoga
//declare array with other method
const myArr2 = new Array(1, 2, 3, 4)

//Array methods:

myArr.push(6)
console.log(myArr);//answer is [0, 1, 2, 3, 4, 5, 6]

myArr.pop()
console.log(myArr);//answer is [ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(0)//it adds number infront of array on 0th index
console.log(myArr);//answer is [0, 0, 1, 2, 3, 4, 5]

myArr.shift()//removes 0th index element
console.log(myArr);//answer is [ 0, 1, 2, 3, 4, 5 ]

console.log(myArr.includes(9));//answer is false

console.log(myArr.indexOf(9));// answer is -1(the value doent exist thats why it returns -1)

const newArr = myArr.join()

console.log(myArr);//answer is [ 0, 1, 2, 3, 4, 5 ]
console.log(typeof newArr);//answer is string
console.log(newArr);// answer is 0,1,2,3,4,5

//differnce b/w slice and splice
//slice

console.log("A", myArr);//answer is A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);//answer is [1, 2]
console.log("B", myArr);//answer is B [ 0, 1, 2, 3, 4, 5 ]

//splice//splice manupulate original array
//splice slice out that part of original array and manupulate original array

const myn2 = myArr.splice(1, 3)

console.log(myn2);//answer is [ 1, 2, 3 ]
console.log("C", myArr);//answer is C [ 0, 4, 5 ]

//session 11 :
//object in depth

//declare objects like literal or constructor
//also includes concept of singleton //like it only create only one instance//and made from constructor

//singleton
Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "hitesh",
    "full name": "hitesh cahudhary",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);//answer is hitesh@google.com
console.log(JsUser["email"]);//answer is hitesh@google.com

console.log(JsUser["full name"]);//answer is hitesh cahudhary

console.log(JsUser[mySym]);//answer is myKey1

//change email
JsUser.email = "hitesh@gmail.com"
//if u want to freeze object so no one can change value 
//Object.freeze(JsUser)//it's syntax

//add function in object
JsUser.greeting = function(){
    console.log("hello js user");
    
}

console.log(JsUser.greeting());//answer is undefined

console.log(JsUser.greeting);//answer is [Function (anonymous)]


JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);//this use to refer same objcet inside object
    
}
console.log(JsUser.greetingTwo);//answer is [Function (anonymous)]
console.log(JsUser.greetingTwo());//answer is hello js user, hitesh

//create object singleton or with the help of constructor
const tinderUser = new Object()

console.log(tinderUser);//answer is {}

//aslo can declare like
const tinderUser2 = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);//answer is { id: '123abc', name: 'Sammy', isLoggedIn: false }

//nested object
const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        username:{
            firstname: "manthan",
            lastname: "balapure"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.username.firstname);//answer is manthan

//combine objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}

const obj3 = Object.assign({}, obj1, obj2)//we put this empty{} beacuse we want to make new object in memory to store the values of obj1 and obj2 
console.log(obj3);//answer is { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//another method is spread
const obj4 = {...obj1, ...obj2}//90% of time we use this synatx to combine objects in new object
console.log(obj4);//answer is { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//values get from database are like below example
const User = [
    {
        id: 1,
        email: "manthan@gmail.com"
    },
    {

    },
    {

    }
]

User[1].email//in this we are accesing object from object indexing one
console.log(User[1].email);//answer is "manthan@gmail.com"

console.log(tinderUser);//answer is { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));//answer is [ 'id', 'name', 'isLoggedIn' ]
//there are lot of proprties of Object available on mdn javascript object

//session 12 :
//objects destructing and json api
//while using react we will get object which we need to destruct in backend to find out required fields

//declaring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "manthan"

}

//we don't write course.courseInstanstructor to get value of courceinstructor we use modern approach

const {courseInstructor} = course
console.log(courseInstructor);//answer is manthan

//we can also change of keyword in course like
const {courseInstructor: instructor} = course
console.log(instructor);//answer is manthan

//API's concept
//we will get values in json formatee most of the time
//below is json object
// {
//     name: "manthan",
//     coursename01: "js in hindi",
//     price01: "free"
// }
//we will also get values in the formatte of array
// [
//     {},
//     {},
//     {}
// ]

//functions and parameters
function addTwoNumbers(num1, num2){  //num1, num2 are parameters
    console.log(num1 + num2);
    
}
addTwoNumbers(3, 4)//answer is 7   //num1, num2 are arguments
addTwoNumbers(3, "4")//answer is 34
addTwoNumbers(3, "a")//answer is 3a
addTwoNumbers(3, null)//answer is 0


function calculateCartPrice(...num1){        //if you use ... it means you can pass any noumber of parameters
    return num1
}

console.log(calculateCartPrice(200, 400, 500));//gives answer in the form of array like this:- [ 200, 400, 500 ]

//----------------------------------------

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user)//answer is Username is hitesh and price is 199


handleObject({
    username: "sam",
    price: 399
})                     //answer is Username is sam and price is 399

//---------------------------------

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));  //answer is 400

//----------------------------------------

//session 12 :
//Global and local scope:

//global scope if we use it on web console it act's ddifferent

// let a = 10
// const b = 20
// var c = 30

//scope means {}

var c = 400 //it's global scope
let a = 300
if (true) {     //inside if block we insert local scope variable
    let a = 10
    const b = 20
    var c = 30
    console.log(a); //gives answer as 10
    
}
console.log(a); //gives answer as 300

//console.log(a);//it shows error
//console.log(b);//it shows error
console.log(c);//gives answer as 30
//------------------------------

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
//----------------------------------------

//session 13 :
//scope level and mini scope :

//nested scope:
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website); //gives error because u cant acces values from function two (){} scope
    
    two() //calling second function
}
one()
//--------------------------------------------
//interesting question
console.log(addone(5));//gives answer as 6

function addone(num){    //this is function
    return num + 1
}
addone(5)

//addTwo(5) //gives answer as error beacuse we call addTwo before we can create because we declare after next line  //beacuse we can't access dou to we hold it in addTwo variable
const addTwo = function(num){  //this is called expression //in javascript the variables are so strong that it can hold function
    return num + 2
}
addTwo(5)

//session 14 :
//this and arrow function

const user1 = {
    username: "manthan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  //this means current context
        console.log(this);//it gives answer as whole object forstly with username manthan and then with username sam
        //this call whole current object
        
    }
}

//console.log();
user1.welcomeMessage()//it gives answer as manthan, welcome to website
user1.username = "sam"
user1.welcomeMessage()//it gives answer as sam, welcome to website

console.log(this); //it gives answer as {} empty //but if u use it in browser console it can give current object which is window object

//arrow functiion:

const chai = function () {
    let username = "manthan"
    console.log(this);
}

chai() //gives answer as undefined

//this is arrow function
const chai1 = () => {
    let username = "manthan"
    console.log(this);
}

chai1() //answer is {}

///---------------------------------

const addTwo1 = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4)); //answer is 5

//--------------------------------------

const addTwo2 = (num1, num2) => num1 + num2

//----------------------------------------

const addTwo3 = (num1, num2) => (num1 + num2) //it gives direct output without return statement

console.log(addTwo3(3, 4));//answer is 7

//----------------------------------------

//const addTwo5 = (num1, num2) => {username: "manthan"}//gives answer as undefined
const addTwo5 = (num1, num2) => ({username: "manthan"})

console.log(addTwo5(6, 7));// gives answer as { username: "manthan"}

//----------------------------------------

//session 16 :
//immediatelly invoked function expression (iife)

(function chai2(){
    console.log(`DB connected`);
    
})(); //gives answer as DB connected
//we use this to avoid global scope variable declaration pollution
//it doen't know where to stop function thats why we use semicolum after calling by iife


//------------------------------


(function chai3(name){
    console.log((`DB connected by ${name}`));
    
})("manthan")//answer is DB connected by manthan


//---------------------------------

//session 17 :
//how does javascript works behind the scene







