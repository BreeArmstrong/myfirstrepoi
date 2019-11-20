// This is to cover the array objects in JS:

//Array:
/*
const students = ['bree', 'damien', 'aj'];
console.log(students.length);

//Array.from:
console.log(Array.from('6692376514'));
 */

//Array.isArray:
/*
console.log(Array.isArray('Bree')); //false - it's a string
console.log(Array.isArray(['Bree', 'Aj', 'Gabby', 'Damien'])); //true
 */

//Array.of:
/*
//Difference between Array(7) and Array.of(7)
console.log(Array(7)); //length of 7 (empty)
console.log(Array.of(7)); //has an array with an element of 7
 */

//Array.concat:
/*
const arr1 = ['0', '1', '2'];
const arr2 = ['3', '4', '5'];

console.log(arr1.concat(arr2)); //add array 2 to the end of array 1
 */

//Array.copyWithin:
/*
const student = ['A', 'B+', 'C-', 'D+', 'F'];

console.log(student.copyWithin(0,3,4)); //Takes the A+ element at index 3 and places it at 0.
console.log(student.copyWithin(0,3));
//this takes elements at index 3 and sets it to index 0, then goes through the rest of the array, starting over at 3.
 */

//Array.entries:
/*
const testArr = ['1','2','3','4','5']; //made them strings for easier distinction in console log

const i = testArr.entries(); //i is usually used as the iterator in for loops, so I wanted to use it here

//continues to iterate over the array and print out index and element.
console.log(i.next().value);
console.log(i.next().value);
 */

//Array.every:
/*
const isUnderFive = (val) => val < 5 ;

const testArr = [1, 2, 3];

console.log(testArr.every(isUnderFive));//returns true
 */

//Array.fill:

//Array.filter:

//Array.find:

//Array.findIndex:

//Array.flat:

//Array.flatMap:

//Array.forEach:

//Array.includes:

//Array.indexOf:

//Array.join:

//Array.keys:

//Array.lastIndexOf:

//Array.map:

//Array.pop:

//Array.push:

//Array.reduce:

//Array.reduceRight:

//Array.reverse:

// Array.shift:

//Array.slice:

// Array.some:

//Array.sort

//Array.splice:

//Array.toLocalString:

//Array.toString:

//Array.unshift:

//Array.values:
