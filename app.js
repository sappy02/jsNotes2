// Exercise
// Write while loops to accomplish the following tasks:

// Count down to 0 from a given number

// let start = 5; // Example usage
// while (start >= 0) {
//   console.log(start);
//   start--;
// }

// Log integers in multiples of 3 as long as they are less than 35.

// let num1 = 3;
// while (num1 < 35) {
//   console.log(num1);
//   num1 += 3;
// }

// Print integers in multiples of 5 as long as they are less than 100.

// let num2 = 0;
// while (num2 < 100) {
//   console.log(num2);
//   num2 += 5;
// }

// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.
// Print all prime numbers between 0 and 20.

// let i = 0;
// while (i <= 20) {
//     if (i % 2 === 0) {
//         console.log(i * 3);
//     }
//     i++;
// }

// console.log("Prime numbers between 0 and 20:");

// // Function to check if a number is prime
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let j = 2; j <= Math.sqrt(num); j++) {
//         if (num % j === 0) return false;
//     }
//     return true;
// }

// // Print all prime numbers between 0 and 20
// i = 2; // Start from 2 as 0 and 1 are not prime
// while (i <= 20) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
//     i++;
// }

// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received.

// Define the cost of the cookie and the amount Romeo paid
const cookieCost = 4;
const amountPaid = 10;

// Calculate the change
let change = amountPaid - cookieCost;

// Initialize a variable to count the quarters
let quarterCount = 0;

// Loop to count quarters
while (change >= 0.25) {
    quarterCount++;
    change -= 0.25;
    change = Math.round(change * 100) / 100; // Round to avoid floating point errors
}

// Output the result
console.log(`Romeo received ${quarterCount} quarters in change.`);
