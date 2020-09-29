var css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("btn");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")"
	//console.log(color1.value);
	css.textContent = body.style.background + ";";
}

function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    //var rgb = "rgb(" + x + "," + y + "," + z + ")";
    var rgb = rgbToHex(x, y, z)
 	//console.log(rgb);
 	return rgb;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function generateBackground() {
	color1.value =  randomRGB();
	color2.value =  randomRGB();

	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value
		+ ", " 
		+ color2.value
		+ ")"
	//console.log(color1.value);
	css.textContent = body.style.background + ";";

}

function setTextContent(){
	css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";
}

setTextContent();

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
random.addEventListener("click",generateBackground);
