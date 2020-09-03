// COurs 3, exercice 7
//Demandez un mot à l'usager, bouclez tant que le mot n'est pas patate.
// a. Comptez et affichez le nombre de mots entrés avant le mot patate.

var legumeRacine;
var patate;

var reponse;
var compteur =0;




do {
    reponse = prompt(" Je suis un légume.\n" +
        "Je pousse sous la terre.\n" +
        "Je suis de forme ronde ou ovale.\n" +
        "Avec moi, on peut faire de la purée ou des frites.\n" +
        "Qui suis-je ?");

    if(reponse === "patate"){
        document.write("Bravo! Vous avez la bonne réponse.");
        //break;
    }
    else{compteur++;}

}
while(reponse != "patate" );

    document.write(" J'ai entré " + compteur + " avant le mot patate ");

