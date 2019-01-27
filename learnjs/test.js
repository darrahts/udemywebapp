

class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi im ${this.name} and I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type, power) {
        super(name, type);
        this.power = power;
    }

    introduce() {
        super.introduce();
        console.log(`my power is ${this.power}`);
    }
}

const flatten = [[0,1], [2,3], [4,5]].reduce((a,b) => a.concat(b), []);



const array = [1,2,3,4,5];
const forEachArray = [];

array.forEach((num) => {
    forEachArray.push(num*2);
});

const mapArray = array.map(num => num*2);

const filterArray = array.filter(num => num % 2 === 0);

const reduceArray = array.reduce((acc, num) => {
    console.log(acc);
    return acc + num;
}, 0);

let x = 5;
console.log("x", x);

// let a = 1;
// let b = 3;

// //currying
// const multiply = (a,b) => a*b;
// const curryMultiply = (a) => (b) => a*b;

// const multiplyBy7 = curryMultiply(7);
// multiplyBy7(7);

// //compose
// const compose = (f,g,h) => (a) => h(f(g(a)));

// const increment = (num) => num+1;
// compose(increment, increment, increment)(3);

// const x = 5;
// console.log(x);

// if(x > 1)
// {
//     let x = 2;
//     console.log(x);
// }
// console.log(x);

// if(b > a) {
//     let a = 10;
// }

// console.log(a);

// if(b > a) {
//      a = 10;
// }

// console.log(a);

// const obj = {
//     w: 1,
//     x: 2,
//     y: 3,
//     z: 4,
// };

// console.log(obj);

// const {w, z} = obj;
// console.log(w);
// console.log(z);


// const name = "john snow";

// const obj2 = {
//     [name]: "hello",
//     [1+2]: "hihi",
// };


// const betterString = `Hello ${name} my favorite number is ${a}`;
// console.log(betterString);

// function greet(name='', age=30, pet='cat') {
//     console.log(`hi ${name} you are ${age}`);
// }

// greet();
// greet('', 31);

// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');

// const add = (a,b) => a+b;

// console.log(add(3,2));
// console.log(add(1,1));



