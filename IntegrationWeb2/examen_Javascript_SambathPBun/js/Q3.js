// examen Java script - Question 3
// Par [Sambath Pheakdey Bun]
// Le [2020-09-21]

//Demander à l'usager de renter un nombre entre 1 et 200
let nbreAleatoire = parseInt(prompt("Entrez un nombre entre 1 et 200."));


//Créer mon tableau
let tabChance = [];

// Créer tableau de 100 cases qui va contenir nombre aléatoire de 1-200
for(let i = 0; i <100 ; i++) {
    tabChance[i] = Math.floor(Math.random() * 200) + 1;
}

//Affichage des nombres aléatoires pour m'assurer qu'il y a un tableau de 100 cases
for(let i = 0; i <100 ; i++) {
    document.write(tabChance[i].toString() + " "  );
}


//Si le nbreAleatoire n'est pas trouvé dans le tableau, variable trouve est = faux (false)
let trouve = false;

//Si nbreAleatoire est trouvé dans le tableau, variable trouve est = vrai(true)
for(let i = 0; i <100 ; i++) {
    if (tabChance[i] === nbreAleatoire) {
        trouve = true;
    }
}

// Affichage des réponses pour usager
if(trouve)
{
    document.write(" Votre nombre se trouve dans le tableau ! :)" + "<br>");
}
else
{
    document.write(" Votre nombre ne se trouve pas dans le tableau ! :(" + "<br>");
}

