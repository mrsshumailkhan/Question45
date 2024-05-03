"use strict";
// Equality and Inequality Test 1
console.log("Equality test with string: ", "Apple" === "Apple");
// Equality and Inequality Test 2
console.log("Inequality test with string: ", "Apple" != "orangr");
// Test using the lower case function
console.log("lower case function test: ", "Hello".toLowerCase() === "hello");
// Numarical tests involving equality
console.log("Equality test with numbers: ", 26 === 26);
// Numarical tests involving inequality
console.log("Equality test with numbers: ", 26 != 35);
// greater than test
console.log("Greater than test: ", 10 > 5);
// less than test
console.log("Greater than test: ", 5 < 10);
// greater than or equal to
console.log("Greater than and Equal to: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to test: ", 5 <= 10);
// tests using "and" operator
console.log("and operator test: ", 5 === 5 && 10 > 5);
//tests using "or" operator
console.log("or operator test: ", 5 === 5 || false);
// test whether an item is in a array
const fruits = ['Nashpati', 'Banana', 'Mango'];
console.log('test "Nashpati" in the array: ', fruits.includes("Nashpati"));
// test whether an item is not in a array
console.log('Testing "Apple" is not in array: ', !fruits.includes('Apple'));
