let lightNumber = document.querySelector("#light-value");
let hueNumber = document.querySelector("#hue-value");
let satNumber = document.querySelector("#sat-value");

let hueSlider = document.querySelector("#hue");
let satSlider = document.querySelector("#sat");
let lightSlider = document.querySelector("#light");



hueNumber.innerHTML = 35;
satNumber.innerHTML = 100;
lightNumber.innerHTML = 50;

console.log("hello");
updateColor();


function updateSlider(obj, display) {
    display = document.querySelector('#' + display);
    display.innerHTML = obj.value;
    updateColor();
}

function updateColor(start) {
    document.body.style.backgroundColor = "hsl(" + 
    hueSlider.value + 
    "," + satSlider.value +
    "%," + lightSlider.value +
    "%)";
    if (start) {
        document.body.style.backgroundColor = "hsl(35,100%,50%)";
    }
}

updateColor(true);

console.log(document.body.style.backgroundColor)