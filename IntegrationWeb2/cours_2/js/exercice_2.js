//Cours 2, exercie 2
// Un marchand décide d'accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus grand que 200$.
// Écrire un algorithme qui permet de calculer et d'afficher la réduction que chaque acheteur a droit,
// connaissant le montant total de leur achat.


var article1;
var article2;
var article3;
var totalDesArticles;
var reductionDe15;

reductionDe15 = 0;

article1 = parseFloat( prompt("prix du premier article 1"));
article2 = parseFloat( prompt("prix du deuxième article 2"));
article3 = parseFloat( prompt("prix du troisième article 3"));

totalDesArticles = parseFloat(article1 + article2 + article3);
calculReduction = parseFloat (totalDesArticles - (totalDesArticles * 0.15))


if (totalDesArticles >= 200){
    reductionDe15 = calculReduction;
}
else{
    calculReduction = 0;
}


console.log("Le prix de votre article 1: " + article1);
console.log("Le prix de votre article 2: " + article2);
console.log("Le prix de votre article 3: " + article3);
console.log("Le grand total de vos achats est de: " + totalDesArticles + "$");
console.log("Votre nouveau total (avec 15% de rabais avec tout achat de 200$ et plus) : " + calculReduction + "$");