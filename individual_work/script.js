
console.log("Task 6. Variables and Data Types");

const fullName = "Ali Assylbek"; 
let age = 19;                    
let isStudent = true;             
let favoriteColor = "Green";       


console.log("fullName:", fullName, "| type:", typeof fullName);
console.log("age:", age, "| type:", typeof age);
console.log("isStudent:", isStudent, "| type:", typeof isStudent);
console.log("favoriteColor:", favoriteColor, "| type:", typeof favoriteColor);


favoriteColor = "Green";
console.log("Reassigned favoriteColor:", favoriteColor, "| type:", typeof favoriteColor);


console.log("\n Task 7. Input and a Greeting");


let userName = prompt("Enter your name:");
if (userName) {
    alert("Hello, " + userName + "! Welcome to JavaScript.");
}


const group = "MT-2504";
const greetingString = `Student Name: ${fullName}, Group: ${group}`;
console.log(greetingString);



console.log("\nTask 8. Sum and Arithmetic");

let input1 = prompt("Enter the first number:", "12");
let input2 = prompt("Enter the second number:", "5");

let num1 = Number(input1);
let num2 = Number(input2);

let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let quot = num1 / num2;
let rem = num1 % num2;

console.log("First number:", num1, "Second number:", num2);
console.log("Sum (+):", sum);
console.log("Difference (-):", diff);
console.log("Product (*):", prod);
console.log("Quotient (/):", quot);
console.log("Remainder (%):", rem);


console.log("\nTask 9. Strings");

let myName = "Ali Assylbek";

console.log("Original string:", myName);
console.log("Length (.length property):", myName.length);
console.log("Uppercase (.toUpperCase()):", myName.toUpperCase());
console.log("Lowercase (.toLowerCase()):", myName.toLowerCase());
console.log("First 3 characters (.slice(0, 3)):", myName.slice(0, 3));


let str1 = "I am a student at Astana IT University.";
let str2 = "I study Media Technologies.";
let fullSentence = str1 + " " + str2;
console.log("Combined sentence:", fullSentence);



console.log("\nTask 10. Increment and Assignment Operators");

let counter = 10;
console.log("Initial counter:", counter);

counter++;
console.log("After ++:", counter);    

counter--;
console.log("After --:", counter);     

counter += 5;
console.log("After += 5:", counter);  

counter -= 3;
console.log("After -= 3:", counter);   

counter *= 2;
console.log("After *= 2:", counter);   

counter /= 4;
console.log("After /= 4:", counter);   



console.log("\nTask 11. Dog to Human Age Calculation");

function calculateHumanAge(dogAge) {
    let humanAge = (dogAge - 2) * 4 + 21;
    console.log(`Dog age: ${dogAge} years old equals ${humanAge} human years.`);
}

calculateHumanAge(2); 
calculateHumanAge(5); 



console.log("\nTask 12. Functions");

function greetUser(name) {
    console.log(`Hello, ${name}! Hope you have a great day.`);
}

greetUser("Ali");
greetUser("Professor");

function calculateSum(a, b) {
    return a + b;
}

console.log("calculateSum(10, 20):", calculateSum(10, 20));
console.log("calculateSum(3.5, 4.5):", calculateSum(3.5, 4.5));

function calculateRectangleArea(width, height) {
    return width * height;
}

console.log("Rectangle Area (5 x 10):", calculateRectangleArea(5, 10));
console.log("Rectangle Area (7 x 3):", calculateRectangleArea(7, 3));