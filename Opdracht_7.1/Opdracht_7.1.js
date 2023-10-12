let budget = 100;

let productprijs = 60;


let saldo = document.getElementById("Resultaat");

if (budget => productprijs) {
    let over = budget - productprijs;
    saldo.innerHTML = "U heeft genoeg geld! " + "€" + over + " is er over van : " + "€" + budget;
saldo.style.color = "green";
}
else {
    saldo.innerHTMl = "Helaas u heeft te weinig geld!";
    saldo.style.color = "red";
}