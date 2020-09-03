//Cours 4, exercice 7
// À l'aide d'une boucle, créer un tableau de 1000 valeurs contenant vrai ou faux(boolean).
// Ces valeurs doivent être aléatoires.
// Ensuite, à l'aide d'une autre boucle, comptez le nombre de vrai et faux et faites-les afficher.

var tableau = new Array(1000);



for(var i = 0 ;i < 1000 ;i++){
    if((i+Math.floor(Math.random()*10))%3 === 0){
        tableau[i] = true;
    }
    else { tableau[i] = false }

    document.write((i+1).toString() + " : " + tableau[i].toString() + "<br>");

}
