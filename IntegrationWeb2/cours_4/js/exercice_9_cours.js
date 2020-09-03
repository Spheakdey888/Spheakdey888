var tableau = [];


//Demander usager de rentrer chiffre 10 fois et rentrer les données dans le tableau
for (i = 0 ; i < 10 ; i++){
    var chiffre = prompt("Veuillez entrer un nombre"); // demander la question à l'usager
    chiffre = parseInt(chiffre); // convertir "chiffre texte" en chiffre
    tableau.push(chiffre); // ajouter la donnée jusqu'à dix dans le tableau
}


var lePluspetit = tableau[0];
var lePlusgrand = tableau[0];

for(i = 1; i < tableau.length; i++){
    if(tableau[i] > lePlusgrand){
        lePlusgrand = tableau[i];
    }
    else if(tableau[i] < lePluspetit){
        lePluspetit = tableau[i];
    }
}

document.write("Le chiffre le plus petit est " + lePluspetit.toString() + "<br>");
document.write("Le chiffre le plus grand est " + lePlusgrand.toString() +"<br>");



