// Cours 4, exercice 6
// Créer un tableau de 10 cellules qui contionnent une chaîne de caractères à deux valeurs (pile ou face).
// Vous décidez manuellement des valeurs qui seront dans le tableau (ce n'est pas random) et affichez ces valeurs à l'aide d'une boucle Pour.

var valeur = ["pile", "face", "face", "pile", "face","pile","pile", "face", "pile", "face"];

for(var i = 0;i < valeur.length;i++){
    document.write((i+1).toString() + " : "+valeur[i] + "<br>");
}