// Cours 2, exercice 4
// Lire deux nombre.
// Vous devez diviser le premier nombre par le deuxième nombre seulement si le deuxième nombre est différent de zéro.
// Par contre, si ce nombre est zéro inscrivez le message suivant : « Division par zéro est interdite. »
// Si ce nombre n'est pas zéro vous devez afficher ce résultat.


var chiffre1;
var chiffre2;
var reponse;

reponse = 0;

chiffre1 = parseInt(prompt("Entrez le premier nombre "));
chiffre2 = parseInt(prompt("Entrez le deuxième nombre "));
calcul = (chiffre1/chiffre2)


if (chiffre2 != 0){
    reponse = calcul;
}
else{
    reponse = " « Division par zéro est interdite. » " ;
}


console.log("Affichage du résultat : " + reponse);