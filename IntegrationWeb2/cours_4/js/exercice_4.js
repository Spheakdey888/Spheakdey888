//Cours 4, exercice 4
//Créer un tableau nommé tab2Exp avec 16 cases entières.
//À l'aide d'une boucle et de Math.pow, insérer les bonnes valeurs dans le tableau.

var tab2Exp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

for(var i = 0; i <= tab2Exp.length-1 ; i++){
    tab2Exp[i] = Math.pow(2, i);
    document.write(tab2Exp[i] + "<br>");
}