const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
// const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Drop"];

// Opdracht 1 Te de eigenschap length hoeveel producten er in de variabel winkelmandje
// zit en toon dit op het scherm met een innertext:
var Aantal = winkelmandje.length;
document.getElementById('opdracht1').innerHTML = "Aantal producten in de winkelmandje: " + Aantal;

// Opdracht 2: Toon alle producten op het scherm:
document.getElementById('opdracht2').innerHTML = winkelmandje.join('<br>');

// Opdracht 3 toon het 4e product van de array winkelmandje
document.getElementById('opdracht3').innerHTML = 'Het 4e product is: ' +winkelmandje[3];

// Opdracht 4 verander Whiskey naar Bier 
winkelmandje[1] = 'Bier';
document.getElementById('opdracht4').innerHTML = 'Whiskey is vervangen door bier: ' + winkelmandje

// Opdracht 5 functie op een product toe te voegen. 
function addProduct() {
const nieuwProduct = prompt("Voer het nieuwe product in:");
winkelmandje.push(nieuwProduct);
document.getElementById("opdracht5").innerHTML = winkelmandje;    
}

// Opdracht 6 
if (winkelmandje.length > 1) {
document.getElementById("opdracht6").innerHTML = "<p>U heeft genoeg producten om te tonen: </p>"
+ winkelmandje.join('<br>') ;
} else {
document.getElementById("opdracht6").innerHTML = "<p>U heeft niet genoeg producten om te tonen.</p>";
}

// Opdracht 7 
if (winkelmandje[4] == "Drop") {
    document.getElementById("opdracht7").innerHTML = "<p>U heeft drop</p>";
} else {
    document.getElementById("opdracht7").innerHTML = "<p>U heeft geen drop.</p>";
}

// Opdracht 8 zet een spatie tussen elk product.
document.getElementById("opdracht8").innerHTML = "<p>Producten met spaties:</p>"
+ winkelmandje.join (' ');

// Opdracht 9 verwijder met de splice functie product 1 en 2 uit de winkelmand 
document.getElementById('opdracht9').innerHTML = "Nieuwe winkelmand: " + winkelmandje.join(', ');

winkelmandje.splice(0, 2);
document.getElementById('nieuwinkelmand').innerHTML = "Nieuwe winkelmand: " + winkelmandje.join(', ');

// Opdracht 10 sorteer de producten op alfabetische volgorde
const winkelmand= ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
winkelmand.sort();
document.getElementById('opdracht10').innerHTML = 'Gesorteerde array: ' + winkelmand.join(', ');