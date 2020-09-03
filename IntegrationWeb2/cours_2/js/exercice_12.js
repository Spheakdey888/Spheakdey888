// Cours 2, exercice 12
// Calculer le prix des assurances pour un véhicule.
// Pour un garçcon entre 16 et 25 ans, le  prix des assurances est de 5% de la valeur du véhicule.
// S'il est plus vieux, le taux sera de 3%.
// Pour une fille entre 16 et 25 ans, le taux est de 3% et de 2% pour une fille plus agée.







var age = prompt("Entrez un age de 16 à 120 ans.");
var sexe = prompt("Entrer un sexe M ou F");
var response = 0;




//Si tu es une fille
if(sexe.toUpperCase() === "F"){
    if(age >= 16 && age <=25 ){
        response = "<h1 style ='color: magenta'> 3 </h1>";
    }
    else{
        response = "<h1 style ='color: magenta'> 2 </h1>";
    }
}


//Si tu es un gars
else{
    //si tu as de 16 à 25 ans
    if(age >= 16 && age <=25 ){
        response = "<h1 style ='color: green'> 5 </h1>" ;
    }
    else{
        response = "<h1 style ='color: green'> 3 </h1>" ;
    }
}

//S'assurer de valider l'age et le sexe, pour gérer tous les cas possibles (sexe, age)
if(age < 16 || age > 120){
    response = " <h1 style='color: darkred'>age invalide</h1>" ;
}
else if(sexe.toUpperCase()!== "M" && sexe.toUpperCase() !== "F"){
    response = " <h1 style='color: darkred'>sexe invalide</h1>"
}

document.write(response)