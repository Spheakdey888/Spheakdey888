//Cours 1, exercice 5
//Lire le nom et l'âge d'un individu, puis convertir son âge en jours ( approximatif). Im primer un message incluant son nom pour l'informer du nombre de jours vécus.

//demander le nom de l'usager
nomUsager = prompt( "Entrez votre nom");//"abcdeef"

//demander l'age de l'usager
ageUsager = prompt( "Entrez votre âge");//"abcdeef"
ageUsager = parseInt(ageUsager)

//valeur d'une année d'un individu en jours
unAn = 365

//retourner le calcul du nombre de jours vécus de l'individu
resultat5 = ageUsager * unAn;


console.log ( " Bonjour " + nomUsager + " , tu as vécu environ " + resultat5 + " jours!! ");



