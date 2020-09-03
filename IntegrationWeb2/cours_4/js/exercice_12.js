// Mettre dans un tableau les 10 bonnes réponses à un test objectif ( vrai ou faux).
// Par la suite, faire la correction du test d'un étudiant en lisant ses 10 réponses et afficher sa note sur 10.

var reponses = ["faux", "vrai", "faux", "vrai", "faux","vrai","faux", "vrai", "faux", "faux"];
var etudiant = ["vrai", "vrai", "vrai", "vrai", "faux","vrai","faux", "vrai", "faux", "faux"];

var note = 0;

for(var i = 0; i <= reponses.length-1 ;i++){
    if(etudiant[i] === reponses[i]){
        note++;
    }

}

document.write("Votre note est de : "+note.toString() + "<br>");