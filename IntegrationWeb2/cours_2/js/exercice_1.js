// Cours 2, exercice 1
// Lire deux nombres et afficher le grand des deux.

var chiffre1;
var chiffre2;
var reponse;

reponse = 0;

chiffre1 = parseInt(prompt("Entrez le premier nombre "));
chiffre2 = parseInt(prompt("Entrez le deuxième nombre "));

// console.log("chiffre 1: "+chiffre1);
// console.log("chiffre 2: "+chiffre2);
// console.log("reponse : "+reponse);

    if (chiffre1 >= chiffre2){
        // console.log("BONJOUR");
        reponse = chiffre1;
    }
    else{
        // console.log("HI");
        reponse = chiffre2;
    }


console.log("le plus grand chiffre est : " + reponse);
