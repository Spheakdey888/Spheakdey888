// Cours 2, exercice 11
// Lire une lettre au clavier.
// Si la lettre "w", écrire " Avancer".
// Si la lettre "a", écrire " Gauche".
// Ajouter "s" et "d".
// Si autre chose, écrire un message d'erreur.

var lettre;
var response;

lettre = prompt("Entrez une lettre parmi ses choix : w, a, s ou d");

if(lettre === "w")
{
    response = "Avancer";
}
else{
    if(lettre === "a")
        response = "Gauche";
    else{
        if(lettre === "s")
            response = "Reculer";
        else{
            if(lettre === "d")
                response = " Droite";
            else{
                response = "Message d'erreur";
            }
        }
    }
}

console.log(response)