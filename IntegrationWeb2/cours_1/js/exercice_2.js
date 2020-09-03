//Cours 1, exercice 2
//Calculer la surface d'un rectangle dont la longueur et la largeur sont lues à l'écran.

//demander un nombre longueur à mon usager
longueur = prompt( "Entrez un nombre pour la longueur");//"123"
longueur = parseInt(longueur) //123

//demander un nombre largueur à mon usager
largeur = prompt( "Entrez un nombre pour la largueur");//"123"
largeur = parseInt(largeur) //123

//retourner le calcul de la surface
resultat2 = largeur * longueur;

console.log("Surface du rectangle = " + resultat2);
