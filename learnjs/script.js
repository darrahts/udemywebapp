var lodash = require('lodash');

const array = [1,2,3,4,5];
console.log('answer:', lodash.without(array, 3));

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("body");
var bg_style = document.getElementById("background-style");

function SetGradient() {
	body.style.background = "linear-gradient(to right, " + 
		color1.value +"," + color2.value + ")";
	bg_style.textContent = body.style.background;
}

color1.addEventListener("input", SetGradient);

color2.addEventListener("input", SetGradient);