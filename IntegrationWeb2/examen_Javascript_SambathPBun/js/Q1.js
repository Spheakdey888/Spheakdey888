// examen Java script - Question 1
// Par [Sambath Pheakdey Bun]
// Le [2020-09-21]

// Demander à usager de rentrer un type de pokémon.
let type = prompt("Quel est le type de pokemon adverse?");

//variable pour dégats
let degats= 0;

//--------------------------------------------

//premier attaque pile ou face
let attaque1 = Math.round(Math.random());

// si attaque donne face = 1, fait 100 de dégats
if(attaque1 === 1){
   degats = degats +100;
   document.write("Premier attaque : face <br>");
}
//sinon attaque donne pile = 0, fait 0 de dégats
else{
    degats = degats + 0;
    document.write("Premier attaque : pile <br>");
}
//--------------------------------------------

//deuxième attaque pile ou face
let attaque2 = Math.round(Math.random());

// si attaque donne face = 1, fait 100 de dégats
if(attaque2 === 1){
    degats = degats +100;
    document.write("Deuxième attaque : face <br>");
}
// si attaque donne face = 0, fait 0 de dégats
else{
    degats = degats + 0;
    document.write("Deuxième attaque : pile <br>");
}

//--------------------------------------------

// Calcul des dégats selon le type de pokémon
if(type === "eau"){
    //pokémon type eau = dégats doublé
    document.write("Vous avez subi " + ( degats*2).toString() + " dégats.");
}
    // dégats pour autres type de pokémon
else {
    document.write("Vous avez subi " + ( degats).toString() + " dégats.");
}