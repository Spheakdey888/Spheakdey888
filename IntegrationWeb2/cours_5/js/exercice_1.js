// Exercice 1 et exercice 2
// Méthode 1
let personne3 = {
    prenom : "Sambath Pheakdey",
    nom : "Bun",
    age : 36
};

for( let cle in personne3){
    document.write(cle.toString()+ " : " + "<br>");
    document.write(personne3[cle].toString()+ "<br>");
}

document.write( "<br>");

// Exercice 3 et exercice 4
//Méthode 2
let personne4 = {};
personne4.prenom = "Laurent";
personne4.nom = "Drolet";
personne4.age = 23;

for( let cle in personne4){
    document.write(cle.toString()+ " : "+ (personne4[cle].toString()) + "<br>");
}

document.write( "<br>");

// Exercice 5
// Méthode 1
let cartePokemon1 = {
    nom : "Pikachu",
    type : "Basic",
    hp : 50,
    nomAttaque1 : "Agility",
    nomAttaque2 : "Thundershock",
    degatsAttaque1 : "Prevent",
    degatsAttaque2 : "Paralyzed"
};

for( let cle in cartePokemon1){
    document.write(cle.toString()+ " : "+ (cartePokemon1[cle].toString()) + "<br>");
}

document.write( "<br>");

// Exercice 6
// Méthode 2
let cartePokemon2 = {};
cartePokemon2.nom = "Greninja";
cartePokemon2.type = "Shunken Flurry";
cartePokemon2.hp = 230;
cartePokemon2.nomAttaque1 = "Haze Slash";
cartePokemon2.nomAttaque2 = " Shadow Hunter";
cartePokemon2.degatsAttaque1 = "Shuffle card" ;
cartePokemon2.degatsAttaque2 = " 130 damage";

for( let cle in cartePokemon2){
    document.write(cle.toString()+ " : "+ (cartePokemon2[cle].toString()) + "<br>");
}



