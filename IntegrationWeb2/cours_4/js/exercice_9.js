// Lire 10 nombres quelconques et les placer dans un tableau.
// Par la suite, trouver le plus petit et le plus grand de ces nombres.

var tableau = new Array(10);

var min = 0;
var max = 0;

for(var i = 0 ; i <= tableau.length-1 ;i++){
    tableau[i] = parseInt(prompt("Veuillez le chiffre #"+(i+1).toString()));
}

document.write("Vous avez entré: <br>")

for(var i=0; i <= tableau.length-1; i++){
    document.write(tableau[i].toString() + "<br>");

    if(tableau[i] < min || i === 0){
        min = tableau[i];
    }

    if(tableau[i] > max || i === 0){
        max =tableau[i];
    }
}

document.write("Le plus grand nombre est " + max + "<br>");
document.write("Le plus petit nombre est " + min + "<br>");



