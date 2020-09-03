// Cours 2, exercice 5
// Lire un degré de température.
// Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAAA il fait froid.»
// Sinon écrire « Enfin une belle journée !»

var temperature;

var reponse;

temperature = parseInt(prompt("Entrez une température entre -40 degree et 40 degree celsius "));



    if(temperature >= -40 && temperature <= -10 ){
        response = " haaaaaaa il fait froid ." ;
    }
    else{
        response = " enfin une belle journée !" ;
    }


console.log("Message : " + response)
