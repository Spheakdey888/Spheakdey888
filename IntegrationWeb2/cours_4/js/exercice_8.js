// Lire les noms  et les notes d'examen d'une classe de 5 élèves.
// Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.

var nom = ["Étudiant A", "Étudiant B", "Étudiant C", "Étudiant D", "Étudiant E" ]
var notes = [50, 60, 70, 80, 90];

var moyenne = 0;

// calcul de la moyenne -- on ajoute les notes ensemble et on divise par la longueur de la table
for(var i=0; i<= notes.length-1; i++){
    moyenne = moyenne + notes[i];
}

moyenne = moyenne / notes.length;

document.write("la moyenne est de : " + moyenne.toString()+"<br>");

// pour chaque eleve, on verifie si la note est egale ou superieure a la moyenne
for(var i = 0; i <= nom.length-1 ; i++){
    if(notes[i] >= moyenne){
        document.write( nom[i] + " a une note au dessus de la moyenne : " + notes[i] + "<br>");
    }
}