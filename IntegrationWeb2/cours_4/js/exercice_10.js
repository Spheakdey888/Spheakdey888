//Cours 4, exercice 10
// Le collège offre 6 options  aux étudiants.
// Ces options sont:
// a. INFORMATIQUE
// b. ADMINISTRATION
// c. HISTOIRE
// d. GÉNIE
// e. GÉOGRAPHIE
// f. BUREAUTIQUE
// Mettre ces options dans un tableau, puis demander à un étudiant d'entrer un nom d'option. Vous lui répondez si OUI ou NON le collège offre cette option.


var options = ["INFORMATIQUE", "ADMINISTRATION", "HISTOIRE", "GÉNIE", "GÉOGRAPHIE","BUREAUTIQUE"];

var optionDemandee = prompt("Quelle option voulez-vous etudier ?").toUpperCase();

var resultat = false;

for(var i = 0  ; i <= options.length-1 ; i++){
    if( optionDemandee === options[i] ){
        resultat = true;
    }
}

if( resultat ){
    document.write("Oui, " + optionDemandee + " est offerte au cégep" + "<br>");
}
else{
    document.write("Non, " + optionDemandee + " n'est pas offerte au cégep" + "<br>");
}