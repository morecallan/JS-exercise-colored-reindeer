var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var reindeerColor = [];

var hohohoElement = document.getElementById("coloredReindeer");



//Loops thorugh all reindeer, concatinates it with corresponding color, adds it as a list item to document
for (var i = 0; i < reindeer.length; i++) {
    reindeerColor[i] = colors[i] + " " + reindeer[i];
    console.log("reindeerColor", reindeerColor);
    hohohoElement.innerHTML += "<li>" + reindeerColor[i] + "</li>";
}

