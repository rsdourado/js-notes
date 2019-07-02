// === TERNARY CONDITINAL === //

function isUserValid(bool) {
    return bool;
}

var ans = isUserValid(true) ? "He is!" : "Bummer, he is not...";

var automatedAns = "your account number is " + ( isUserValid(false) ? "1234" : "not available." );



// === SWITCH CASE === //

function moveCmd(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";    
            break;
        case "back":
            whatHappens = "you arrived home";    
            break;
        case "right":
            whatHappens = "you found a river";    
            break;
        case "left":
            whatHappens = "you run into a troll";    
            break;
        default:
            whatHappens = "please enter a valid direction";   
            break;
    }
    return whatHappens;
}



// === LET AND CONST === //
// var only has limited scope inside a function, while let and const have limited scope inside any block
// const cannot be changed later in the program

const player = 'booby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log("inside", wizardLevel); // logs "true"
}

console.log("outside", wizardLevel); // logs "false"

experience = 80; // works
player = "Sally"; // doesn't work

const player = { // the object player can not be assigned to something else, however...
    name: 'boby', // its properties can!!
    xp: 100,
    wizardLevel: false
} 
player.name = "Sally"; // this works!!! Pay attention!



// === DESTRUCTURING === //
// unpack values from arrays, or properties from objects, into distinct variables.

const player = {
    name: 'boby',
    xp: 100,
    wizardLevel: false
}

// slow way of doing it

const name = player.name;
const xp = player.xp;
let wizardLevel = player.wizardLevel;

// better way of doing it:

const { name, xp } = player; // value of 'const name' will be assigned as the value of 'player.name', and so on...
let { wizardLevel } = player;
// be aware that updating the value of the object will not update the value of the variables.



// === OBJECT PROPERTIES === // new ways of declaring object properties.

const name = "John Snow";

const obj = { // you can use an expression to determine the name of a property
    [name]: "hello", // = John Snow: "hello" // to later reference a obj with a space, use obj["Property Name"]
    ["ray"+"smith"]: "hihi", // = raysmith: "hihi"
    [1+2]: "this is 3"
}  



// === ADDING VARIABLES TO AN OBJECT AS A VALUE / PAIR === //

const a = "simon";
const b = true;
const c = {}; // object

// old way of adding this constants to an object

const obj = {
    a: a,
    b: b,
    c: c
}

// new way of doing, if property and vaule are the same

const obj = { a, b, c } // obj.a = "simon" ...


// === TEMPLATE STRINGS === ///

let name = "Rafael";
let mood = "well";
let age = 34;

const greeting = "Hello " + name + "! You seem to be doing " + mood + "."; // slow way

const betterGreeting = `Hello ${name}! You are looking very ${mood} for a ${age - 5} year old.`; // better way, and expressions can go inside the brackets


// === DEFAULT ARGUMENTS === //

function greet(name='Person', age=30, mood="well") {
   return `Hello ${name}! You are looking very ${mood} for a ${age - 5} year old.`;
}



// === JS TYPE: SYMBOL === //

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

(sym2 === sym3); // is false, because symbols are a completely unique type



// === ARROW FUNCTIONS === //

//old way:
function add(a,b) {
    return a+b;
}

//arrow way:
const add = (a,b) => {
    return a+b;
} // this works, but also:

const add = (a,b) => a+b; // also returns the expression, because it assumes you want to return it. 

// === ADVANCED FUNCTIONS === //

// old way
function first() {
    var greet = 'hi';
    function second() {
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();

// new way
const first = () => {
    const greet = 'hi';
    const second = () => { alert(greet); }
    return second;
}

const newFunc = first();
newFunc(); // This results in an alert. because newFunc equals second and the parentheses executes that. 

first(); // results in the second function, but not an alert.

newFunc; // results in the same as first();, thus, not an alert.

// CLOSURES: A function ran, the function executed. It's never going to execute again. But it's going to rember that there are references to those variables, so the child scope always has access to the parent scope. 

// CURRYING: The process of converting a function that takes multiple arguments into a function that takes then one at a time.

const multilply = (a,b) => a*b; // currying means changing this function to only accept one argument at a time.

const curriedMultiply = (a) => (b) => a*b;

curriedMultiply(3); // returns (b) => a*b

curriedMultiply(3)(4); // returns 12.

// The advantage is that this is more flexible. For example, one could create:

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(10); // returns 50;


// COMPOSE: The act of putting two functions together to form a third function where the output of one function is the input of the other.  
const compose = (f, g) => (a) => f(g(a));
// f is a function and g also, because the way they appear in the last part. 

const sum = (num) => num + 1;

compose(sum, sum)(5); // results in 7



// Avoiding side effects, and functional purity:

let a = 1;
function b() {
    a = 2; // that is a side effect. Something in a function that affects the outside world. There is nothing wrong with it, but it is good practice to avoid this side effects.
}
// So, functional purity means: avoiding those side effects and always returning a value

// By aovind side effects, and always returning a value, we create deterministic functions. This means that no matter what, the same inputs will alwyas return the same value. This is a key principal in avoiding bugs. 



// === ARRAYS === //

const array = [1,2,10,16];

const double = []
const newArray = array.forEach(num => {
    double.push(num * 2); // push adds a value to the array
});

console.log(newArray); // returns undefined
console.log(double); // returns [2,4,20,32]

// MAP, FILTER, REDUCE // most important methods for day to day javascript.

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const array = [1,2,10,16];

const mapArray = array.map(num => {
    return num * 2;
});

console.log(mapArray); // returns [2,4,20,32]

// the function above can also be rewritten as:
const mapArray = array.map(num => num * 2);


// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const array = [1,2,10,16];

const filterArray = array.filter(num => {
    return num > 5;
});

console.log(filterArray);
// the function above can also be rewritten as:

const filterArray = array.filter(num => num > 5);


// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const array = [1,2,10,16];

const reduceArray = array.reduce((accumulator, num) => { // The accumulator is something where we can store the information that happens in the body of the function 
    return accumulator + num;
}, 13); // the 1st iteration is 13+1=14, the 2nd 14+2=16, the 3rd 16+10=26, the 4th 26+16=42, so the const reduceArray is 42;
// the second argument of the reduce function is the initial value of the accumulator

// the function above can also be written as:

const reduceArray = array.reduce(((accumulator, num) => accumulator + num), 13);



// === ADVANCED OBJECTS === //

// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

(object1 === object2); // true
(object1 === object3); // false

object1.value = 15;
object2.value; // returns 15

// in this example, object 2 is not a new object, but only a reference to the first object.



// Context (not to be confused with scope)
// context tells where we are within an object
// 'this' is a reference to the object that it's inside of

const object4 = {
    a: function(){
        console.log(this);
    }
}
object4.a(); // returns the object4,  { a: f }



// Instatiation
// making instances, or multiple copys, of an object

class Player { // think of class as something I want to make a copy of
    constructor(name, type) { // the firt function that runs when a new instance of Player is created;
        console.log("player", this); // just for demo purpose
        this.name = name; // here the constructor functions are creating this properties
        this.type = type;
    }
    introduce(){
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}.`);
    }
} 

// now lets create a wizard player

class Wizard extends Player { // I want to add on top of whatever Player already has
    constructor(name, type) {
        super(name, type) // it is calling the construction function of the Player class
        console.log("wizard", this); // just for demo purpose
    }
    play(){
        console.log(`WEEEEEE I'm a ${this.type}.`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Sean', 'Dark Magic');

wizard1.play(); // returns: WEEEEEE I'm a Healer.
wizard2.introduce(); // returns: Hi, I am Sean, I'm a Dark Magic.



// before the introduction of ES6, this code would be written like this:
// Classical inheritance
var Player = function(name, type) {
    this.name = name;
    this.type = type;
}

Player.prototype.introduce = function(){
    console.log(`Hi, I am ${this.name}, I'm a ${this.type}.`);
}

var wizard1 = new Player('Shelly', 'Healer');
var wizard1 = new Player('Sean', 'Dark Magic');

wizard1.play = function () {
    console.log(`WEEEEEE I'm a ${this.type}.`);
}
wizard2.play = function () {
    console.log(`WEEEEEE I'm a ${this.type}.`);
}




// === PASS BY REFERENCE VS PASS BY VALUE === //

var a = 5;
var b = a; // primitive types are passed by value, so this is the same as b = 5;
b++;
console.log(a); // 5
console.log(b); // 6

let obj1 = {name: "Yao", password: "123"};
let obj2 = obj1;

obj2.password = "secret";

console.log(obj1); // {name: "Yao", password: "secret"} 
console.log(obj2); // {name: "Yao", password: "secret"}
// Objects is Javascript are stored in memory and passed by reference, the values are not copied. They both point to the same space in memory.

var c = [1,2,3,4,5]; // Be careful! Arrays are objects!
var d = c;
d.push(1234);
console.log(d); // [1, 2, 3, 4, 5, 1234]
console.log(c); // [1, 2, 3, 4, 5, 1234]

// If I wanted to copy the array, isntead of reference it, I could:
var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(1234);
console.log(d); // [1, 2, 3, 4, 5, 1234]
console.log(c); // [1, 2, 3, 4, 5]

// How to copy an object?
let obj = {a: "a", b: "b", c: "c"};
let clone = Object.assign({},obj);
let clone2 = {...obj}; // another way of doing the same as previous line

obj.c = 5;
console.log(clone); // {a: "a", b: "b", c: "c"} // The clone obj was not affected
console.log(obj); // {a: "a", b: "b", c: 5}

// How about if you want to copy and object within and object?

let obj = {
    a: "a", 
    b: "b", 
    c: {
        deep: 'try and copy me'
    }
};

let clone = Object.assign({},obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahaha";
console.log("obj", obj);
console.log("clone", clone);
console.log("clone2", clone2); // all this obj now have c: "hahaha"
// This is called a shallow clone. The address in memory for the obj was clone, but within it, there was another address in memory, witch was passed by reference

console.log("superClone", superClone); // c: 'try and copy me'




// === TYPE COERCION === // 

1 == '1';
// true
1 === '1';
// false




// === ES7 === // added the includes method and exponantial operator

const pets = ['cat', 'dog', 'bat'];
pets.includes('cat'); // true
pets.includes('bird'); // false

const square = (x) => x**2; // ** means "elevated to"
square(5); // 25



// === ES8 === //

let obj = {
    username1: "Santa",
    username2: "Rudolf",
    username3: "Grinch",
}



// old way of iterating objects
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

// new way:

Object.values(obj).forEach(value => {
    console.log(value);
}); // this logs only the values

Object.entries(obj).forEach(value => {
    console.log(value);
}); // this logs 3 arrays, each with 2 items, the first is the property, and the second the value

// example of how this could be used:

Object.entries(obj).map(value => {
    return value[0].replace("username", "")+": "+value[1];
}) // [ "1: Santa", "2: Rudolf", "3: Grinch" ]




// === LOOPS === //

const basket = ["apples", "oranges", "grapes"];

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

// Simple for loop:
for (let index = 0; index < basket.length; index++) {
    const element = basket[index];
    console.log(element);
}

// forEach loop:
basket.forEach(element => {
    console.log(element);
});

// for of loop // Iterating // Works with arrays, strings, etc (but not objects)
for (const item of basket) {
    console.log(item);
}

// for in loop // Enumarating // works with objects and arrays
for (item in detailedBasket) {
    console.log(item);
} // logs apples oranges grapes

for (item in detailedBasket) {
    console.log(detailedBasket[item]);
} // logs 5 10 1000

for (item in basket) {
    console.log(item);
} // logs 0 1 2



/// === DEBUGING === //

const flattened = [[0,1],[2,3],[4,5]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat(array);
}, []);


// === SET TIME OUT === //

console.log(1);
setTimeout(() => {
    console.log(2);
}, 2000);
console.log(3);

// logs 
// 1
// 3
// 2s later: 2

// === PROMISES === //

// bad way, callback pyramid of doom
movePlayer(100, 'Left', function () { 
    movePlayer(400, 'Left', function() {
        movePlayer(10, 'Right', function() { 
            movePlyer(330, 'Left', function(){
            });
        });
    });
});

// with promises:

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'));

// how to create a promise:

const promise = new Promise ((resolve, reject) => {
    if (true) {
        resolve('This thing works!');
    } else {
        reject('Error, it broke...');
    }
});

// how to get the promise to run:

promise.then(result => console.log(result)); //returns: This thing works! // "result" is just a variable name, it could be anything.

// it is possible to chain multiple 'then' functions

promise
  .then(result => result + '?')
  .then(result2 => {
      console.log(result2);
  }); // logs: This thing works!?

promise
  .then(result => result + '?')
  .then(result2 => {
    throw Error
    console.log(result2);
})
  .catch(() => console.log('errrror!')); // logs: errrror! // .catch catches any error that happens in the 'then' functions.

promise
    .then(result => result + '?')
    .then(result2 => result2 + '!?')
    .catch(() => console.log('errrror!'))
    .then(result3 => {
        console.log(result3);
}); // logs: This thing works!?!? // 'catch' only runs if something fails before it

const promise = new Promise ((resolve, reject) => {
    if (true) {
        resolve('This thing works!');
    } else {
        reject('Error, it broke...');
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hi!"); // settimout allows a code to run after a few miliseconds
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Helllooooooooo!"); // settimout allows a code to run after a few miliseconds
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "La La La ..."); // settimout allows a code to run after a few miliseconds
});

Promise.all([promise, promise2, promise3, promise4])
  .then(values => {
      console.log(values);
  }); // after 3s logs: ["This thing works!", "Hi!", "Helllooooooooo!", "La La La ..."]
  // the time starts counting from the moment the const is assigned.

  // a real world application:

  const urls = [
      'https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/posts',
      'https://jsonplaceholder.typicode.com/albums',
  ];

  Promise.all(urls.map(url => {
      return fetch(url).then(resp => resp.json())
  })).then(results => {
      console.log(results[0]);
      console.log(results[1]);
      console.log(results[2]);
  });


