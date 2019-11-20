//Object Prototypes:

//Object.assign:
/*
const target = {username: 'Bree', pass: 'Secret123', email: 'email'};
const source = {name: 'Brianna', pass: 'MySecret123', age: 25}

const returnedTarget = Object.assign(target,source);
console.log(target);
console.log(returnedTarget);
//these two are the same because it changes the target object.
const phone1 = {areacode: 669};
const phone2 = {middlenumbers: 237};
const phone3 = {end: 6514};
const phoneNumber = Object.assign(phone1, phone2,phone3);
console.log(phoneNumber)
*/

// Object.create:
/*
const user = {
    isAuthenticated: 'true',
    name: 'username',
    email: 'emailhere.com',
    role: 'viewer'
}

const bree = Object.create(user);

bree.name = 'chibi';
bree.email = 'chibi@chibi.com';
bree.role = 'Admin';

console.log(bree)
*/
//Object.defineProperties:
/*
const damien = {};

Object.defineProperties(damien, {
    userAge: {
    value: 39,
    configurable: true
    },
    userBirthYear: {
    value: 1980,
    writable: true
    }
});

console.log(damien.userAge);
*/
//Object.defineProperty:
/*
Object.defineProperty(damien, 'isEngaged', {
value: true,
configurable: false
});
damien.isEngaged = false
console.log(damien.isEngaged);
//expecting true since I set it to not be configurable.

//Object.entries:
console.log(Object.entries(bree));
//Prints out the object

for (let [key, value] of Object.entries(bree)){
    console.log(`${key}: ${value}`);
}
*/
//Prints it out in a formatted manner given by the console.log parameter.

//Object.freeze
/*
console.log(`Before being froze my username is: ${bree.name}`);
Object.freeze(bree);

bree.name = 'ChibiBree'

console.log(`After being froze my username is: ${bree.name}`);
*/
//The same because I used .freeze on it and now you can't change the values.

//Object.fromEntries:
/*
const job = new Map ([
    ['client', 'abc company'],
    ['payrate', 80]
]);

const newJob = Object.fromEntries(job);

console.log(newJob);
*/
// Turns the two arrays into 2 key: value pairs.

//Object.getOwnPropertyDescriptor
/*
const testObj = {
    pretend: 1,
    test: 'this is a test'
}

const descriptor = Object.getOwnPropertyDescriptor(testObj, 'pretend');

console.log(descriptor.value);
console.log(descriptor.configurable);
*/
// should return 1 and true

//Object.getOwnPropertyNames
/*
const user = {
    name: 'username',
    role: 'role',
    age: 24
}

console.log(Object.getOwnPropertyNames(user));
*/
//Print out just the keys into an array

//Object.getOwnPropertySymbols:
/*
var student = {}
var grade = Symbol('grade');
var assignments = Symbol.for('assignments');

student[grade] = 'A';
student[assignments] = 12;

var studentSymbols = Object.getOwnPropertySymbols(student);

console.log(studentSymbols);
console.log(studentSymbols[0]);
*/
//Returned the array of symbols.

//Object.getPrototypeOf
/*
const test1 = {};
const test2 = Object.create(test1);

console.log(Object.getPrototypeOf(test2) === test1);
//should check to see if they return the same prototype.
*/
//Should be true

//Object.is:
// console.log(Object.is('test', 'test'));
//checks to see if two values are the same

//Object.isExtensible
//Extensible means being able to add new properties.
/*
const damien = {};
console.log(Object.isExtensible(damien));
//Should be true
*/
//Object.isFrozen - also checks the previous one.
/*
const bree = {};
Object.freeze(bree);
console.log(Object.isExtensible(bree));
//returns false because frozen
console.log(Object.isFrozen(bree));
//returns true because frozen.
 */

//Object.isSealed:
/*
const test = {
    testing: true
};

console.log(Object.isSealed(test));
//I haven't sealed it, so false
*/

//Object.keys
/*
const testObj = {
    a:1,
    b:'two',
    c:3
};

console.log(Object.keys(testObj));
 */
//spits out the keys in an array format.

//Object.preventExtensions:
/*
const neverChangingObject = {};

Object.preventExtensions(neverChangingObject);
console.log(Object.isExtensible(neverChangingObject));
//Shows that you can't add properties anymore since is isn't extensible.
 */

// Object.prototype.hasOwnProperty:
/*
const testObj = new Object();
testObj.property1 = 42;

console.log(testObj.hasOwnProperty('property1'));
//yes because we just made it.

console.log(testObj.hasOwnProperty('toString'));
//tests to see if testObj has a "toString" property directly.
//this one returns false since I didn't define that property in testObj.
*/

//Object.prototype.isPrototypeOf:
/*
function testObj1() {}
function testObj2() {}

testObj1.prototype = Object.create(testObj2.prototype);

const testObj3 = new testObj1();

//Testing to see if testobj1 and testobj3 have the same prototype.
//should return true since obj3 is an instance of testobj1.
console.log(testObj1.prototype.isPrototypeOf(testObj3));

//Now check if testobj 2 and 3 are the same:
console.log(testObj2.prototype.isPrototypeOf(testObj3));
 */

//Object.prototype.propertyIsEmumerable:
/*
var obj = {};
var arr = [];

obj.prop = 'is enumerable';
arr[0] = 'is enumerable';

console.log(obj.propertyIsEnumerable('prop'));
console.log(arr.propertyIsEnumerable(0));
//Works on both objects and arrays.
 */

//Object.prototype.toLocalString:
/*
const engaged = new Date(Date.UTC(2019, 4, 26, 19,0,0));

console.log(engaged.toLocaleString());
//prints out the date set or you can even get a current dateTime and determine the local.
 */

//Object.type.toString:
/*
function Dog(name){
    this.name = name;
}

var dog1 = new Dog('Kora');

Dog.prototype.toString = function dogToString() {
    return '' + this.name
};

console.log(dog1.toString());
//Takes an object and converts it to a string.
 */

//Object.valueOf:
/*
function NumType(n) {
    this.number = n
}

NumType.prototype.valueOf = function (){
    return this.number;
};

const newNum = new NumType(6);

console.log(newNum + 9);
//need to declare valueOf for all primitive types
//returns 15


//Object.seal:
Object.seal(newNum);
newNum.number = 12;
console.log(newNum.number);
//Changes the value of the properties, but can't add new properties in. (as long as writable)
 */

//Object.setPrototypeOf:
// const test = Object.setPrototypeOf({}, null);
//Can't be used if the prototype parameter isn't either obj || null

//Object.values:
//Like the object.keys but just for the value side.
/*
const student = {
    age: 24,
    GPA: 4.0,
    grade: 'A',
    assignments: 12
};

console.log(Object.values(student));
 */