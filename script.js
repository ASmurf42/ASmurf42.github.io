let lightNumber = document.querySelector("#light-value");
let hueNumber = document.querySelector("#hue-value");
let satNumber = document.querySelector("#sat-value");

let hueSlider = document.querySelector("#hue");
let satSlider = document.querySelector("#sat");
let lightSlider = document.querySelector("#light");

let showingMenue;


hueNumber.innerHTML = 35;
satNumber.innerHTML = 90;
lightNumber.innerHTML = 50;

hueSlider.value = 35;
satSlider.value = 90;
lightSlider.value = 50;

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
            
        hueSlider.value = 35;
        satSlider.value = 90;
        lightSlider.value = 50;
    }
}

function toggleColapse() {
    console.log("hi")
    let container = document.getElementById("collapsable");




    if (showingMenue || showingMenue !== undefined) {
        console.log("showing")
        container.classList.toggle("showing");
        container.classList.toggle("hiding");
        showingMenue = false;
    }
    else if (!showingMenue || showingMenue !== undefined) {
        console.log("hiding")
        container.classList.toggle("showing");
        showingMenue = true;

    }
    else {
        console.log("else");
    }

}


updateColor(true);

console.log(document.body.style.backgroundColor)