//Cours 1, exercice 6
//Faites un programme qui lit le nom d'un article et son prix de détail. Votre programme doit afficher le prix de gros (66% du prix de détail) ainsi que le profit attendu.

//demander le nom de l'article
nomArticle = prompt("Entrer le nom de l'article");

//demander le prix de détail de l'article
prixArticle = prompt("Entrer le prix de détail l'article");
prixArticle = parseFloat(prixArticle);

// calculer le prix de gros
prixGrosResultat = (prixArticle * 0.66);

// calculer le profit attendu
profit = (prixArticle-prixGrosResultat);

// Afficher le gros prix et le profit
console.log( " L'article " + nomArticle + ( " gros prix : " + prixGrosResultat  + " profit : " + profit) );