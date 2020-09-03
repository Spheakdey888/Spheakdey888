// Cours 1, exercice 10

var date;
var article1;
var article2;
var article3;

var tps;
var tvq;
var total;

date = prompt("Veuillez entrer la date");
articles1 = parseFloat( prompt("prix du premier article"));
articles2 = parseFloat( prompt("prix du deuxième article"));
articles3 = parseFloat( prompt("prix du troisième article"));


total = article1 + article2 + article3;

tps = 0.05 * total;
tvq = 0.0975 * total;
grandTotal = total + tps + tvq;

console.log("Facture en date du : " + date);
console.log("montant de tps : " + tps);
console.log("montant de tvq : " + tvq);
console.log("grand total : " + grandTotal);