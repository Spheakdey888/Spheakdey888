var chiffre;
var compteurPositif = 0;
var compteurNegatif = 0;

chiffre = prompt("Entrez un chiffre.")

    if(chiffre > 0){
        compteurPositif++;
    } else if (chiffre < 0){
        compteurNegatif++;
    }







document.write("L'usager a entré " + compteurPositif + "chiffre positifs.");
document.write("L'usager a entré " + compteurNegatif + "chiffre positifs.");
