//Cours 3, exercice 3
//Affichez les mois précédents de décembre à janvier à l'aide d'une boucle FOR (inversée).

var moisDeLannee = ["janvier", "février", "mars", "avril", "mai","juin","juillet", "août", "septembre", "octobre", "novembre","décembre"];

for(var i = moisDeLannee.length - 1; i >= 0 ;i--){
    document.write(moisDeLannee[i] + "<br>");
}