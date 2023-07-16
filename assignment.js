// Q1
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// Q2
let planetFacts = {
	numPlanets: 8,
	yearNeptuneDiscovered: 1846,
	yearMarsDiscovered: 1659,
};
let { numPlanets1, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Q3
function getUserData({ firstName, favoriteColor = "green" }) {
	return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // 'Your name is Alejandro and you like purple'
getUserData({ firstName: "Melissa" }); // 'Your name is Melissa and you like green'
getUserData({}); // 'Your name is undefined and you like green'

// Q4
let [first, second, third] = ["Maya", "Marisa", "Chi"];
console.log(first); // "Maya"
console.log(second); // "Marisa"
console.log(third); // "Chi"

// Q5
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
	"Raindrops on roses",
	"whiskers on kittens",
	"Bright copper kettles",
	"warm woolen mittens",
	"Brown paper packages tied up with strings",
];
console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "Wiskers on Kitens"
console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

// Q6
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // [10, 30, 20]

// Q7
// var b = obj.numbers.b;

// var obj = {
// 	numbers: {
// 		a: 1,
// 		b: 2,
// 	},
// };

// var a = obj.numbers.a;

const obj = {
	numbers: {
		a: 1,
		b: 2,
	},
};
const { a, b } = obj.numbers;

// Q8
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]];
// Q9
// Write a function called ***raceResults*** which accepts a single array argument. It should return an object with the keys ***first***, ***second***, ***third***, and ***rest***.
// - first: the first element in the array
// - second: the second element in the array
// - third: the third element in the array
// - rest: all other elements in the array

// **Write a *one line* function to make this work using**
// - An arrow function
// - Destructuring
// - `Enhanced` object assignment (same key/value shortcut)

function raceResults([first, second, third, ...rest]) {
	return {
		first,
		second,
		third,
		rest,
	};
}

const raceResults1() = ([first, seconf, third, ...rest]) => ({ first, seconf, third, rest });