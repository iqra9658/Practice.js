// 1. Function Declaration and Function Calls
function Welcome(){
    console.log("Welcome to javaScript");
    console.log("I am learning functions!");
    console.log("Practice makes progress");
}
Welcome();
Welcome();

// 2. Function Parameters and Arguments
function greet(name){
    console.log("Hello "+name);
}
greet("World!");
greet("JS");

// 3. Default Parameters
function greet(name="John"){
    console.log("Hello "+name);
}
greet("JS");
greet();

// 4. Default Parameter with Another Example
function welcome(name="Guest"){
    console.log("Hello "+name);
}
welcome("iqra");
welcome();

// 5. Return Statement
function multiply(a,b){
    return a*b;
}
let result = multiply(4,5);
console.log(result);

// 6. Function Expression
const subtract = function(a,b){
    return a-b;
};
console.log(subtract(10,4));

// 7. Function Declaration with Return Value
function square(number){
    return number*number;
}
console.log(square(5));

// 8. Arrow Function
const add = number => number+number;
console.log(add(5));

// 9. Function Hoisting
// Function declarations can be called before their definition
greet("JS");
function greet(name){
    console.log("Hello "+name);
}

// 10. Passing Return Values Between Functions
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
console.log(multiply(add(2,3),add(4,5)));

// 11. Passing an Array to a Function
function calculateTotal(numbers){
    let sum=0;
    for(let number of numbers){
        sum=sum+number;
    }
    return sum;
}
let result = calculateTotal([10,20,30,40]);
console.log(result);

// 12. Function Composition
// Calling multiple functions inside another function
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function calculate(a,b,c,d){
    let firstSum = add(a,b);
    let secondSum = add(c,d);
    return multiply(firstSum,secondSum);
}
console.log(calculate(2,3,4,5));

// Note: Comment out duplicate function declarations and
// repeated 'let result' declarations when testing all code together.