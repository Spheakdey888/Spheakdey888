// Cours 2, exercice 3
// Lire deux nombres, si Les deux nombres sont plus grand que 9 écrire le mot « BONJOUR » et si tel n'est pas le cas écrire « BONSOIR ».

var chiffre1;
var chiffre2;
var reponse;




chiffre1 = parseInt(prompt("Entrez le premier nombre "));
chiffre2 = parseInt(prompt("Entrez le deuxième nombre "));


if (chiffre1 > 9 && chiffre2 > 9){
    reponse = " bonjour" ;
}
else{
    reponse = " bonsoir " ;
}

console.log("Votre message : " + reponse);