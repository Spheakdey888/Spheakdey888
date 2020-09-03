// Cours 2, exercice 9

//Faire un programme qui lit un nom d'utilisateur et un mot de passe.
// Si le nom d'utilisateur est « admin » et le mot de passe « 12345 », affichez le message suivant : « Bonjour « nom utilsateur ».
// Si les informations ne sont pas correctes, affichez le message suivant : « Votre nom d'utilisateur ou votre mot de passe est invalide. »


var nomUsager;
var motPasse;
var response;

nomUsager = prompt( "Entrer vote nom usager.");
motPasse = prompt("Entrer votre mot de passe.");

if (nomUsager === "admin" && motPasse === "12345")
{
    response = ("Bonjour : " + nomUsager);
}
else{
    response = ("Votre nom d'utilisateur ou votre mot de passe est invalide.");
}

console.log(response);
