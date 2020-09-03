// Cours 2, exercice 13
// Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand.
// Si les deux nombre sont identiques, affichez un message d'erreur.

var a;
var b;


a = parseInt(prompt(" Entrez le nombre A "));
b = parseInt(prompt(" Entrez le nombre B "));

if( a > b){
    console.log("le plus petit est " + b);
    console.log("le plus grand est " + a);
}


if( b > a){
    console.log("le plus petit est " + a);
    console.log("le plus grand est " + b);
}

else{
    console.log("erreur, les deux nombres sont égaux !")
}



