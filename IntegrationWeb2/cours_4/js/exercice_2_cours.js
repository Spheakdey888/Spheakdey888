var tableau = []; //déclarer le type de donnér, ici c'est important de mentionner Tableau pour lire les données

tableau [0] = "Janvier";
tableau [1] = "Février";
tableau [2] = "Mars";
tableau [3] = "Avril";
tableau [4] = "Mai";
tableau [5] = "Juin";
tableau [6] = "Juillet";
tableau [7] = "Août";
tableau [8] = "Septembre";
tableau [9] = "Octobre";
tableau [10] = "Novembre";
tableau [11] = "Décembre";

for(var i=0; i<tableau.length; i++){
    document.write(tableau[i]);
    document.write("<br>");
}
