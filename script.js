let lightNumber = document.querySelector("#light-value");
let hueNumber = document.querySelector("#hue-value");
let satNumber = document.querySelector("#sat-value");

let hueSlider = document.querySelector("#hue");
let satSlider = document.querySelector("#sat");
let lightSlider = document.querySelector("#light");

let showingMenue;
let interval;

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
    let container = document.getElementById("collapsable");

    if (showingMenue === undefined) {
        console.log("IT'S UNDEINFED")
            console.log("hiding")
            container.classList.toggle("hiding");
            showingMenue = false;
    }
    else {
        if (showingMenue) {
            console.log("hiding")
            container.classList.toggle("showing");
            container.classList.toggle("hiding");
            showingMenue = false;
        }
        else {
            console.log("showing")
            container.classList.toggle("hiding");
            container.classList.toggle("showing");
            showingMenue = true;
    
        }
    }
}

function rainbow(restart) {
    let speedDial = document.querySelector("#speedSelector");
    let checkbox = document.querySelector("#checkbox");
    
    if (restart) {
        clearInterval(interval);
        console.log("restarting")
    }

    if (checkbox.checked) {
    
        speedDial.disabled = false;
    
        console.log("starting timer....")
        interval = setInterval(function () {

            if (!checkbox.checked) {
                clearInterval(interval);        
                speedDial.disabled = true;
            }
            let tmpX = Number(hueSlider.value)
            let tmpY = Number(speedDial.value);
            hueSlider.value = tmpX + Math.round((tmpY + 5)/tmpY); //change the color (adding to the hue)
            if (hueSlider.value > 359)
                hueSlider.value = 0;
            
            updateColor();
            document.getElementById("hue-value").innerHTML = hueSlider.value;

        }, speedDial.value);
    }
    else {
        speedDial.disabled = true;
        clearInterval(interval);
        console.log("Time's up!");
    }



}

updateColor(true);
rainbow(true);
console.log(document.body.style.backgroundColor)