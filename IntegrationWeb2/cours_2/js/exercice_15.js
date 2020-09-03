// Cours 2, exercice 15
// Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.

var largeur= prompt("entre un nombre");
var longueur= prompt("entrer un deuxième nombre");



if(largeur + longueur * 2 >= 100){
    response = largeur * longueur;
}
else if (largeur + longueur * 2 < 100 ){
    response = "Votre périmètre est inférieur à 100.";
}

document.write(response);