//Cours 3, exercice 5

// Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et  compter le nombre de 1 et 0.

//boucle 100 fois

var randomNumber = 0;
var nombreDe1 = 0 ;
var nombreDe0 = 0;

for( var i =  0; i < 100; i++){
    randomNumber = Math.round(Math.random());



    if(randomNumber === 0){
        nombreDe0++;
    }
    else{
        nombreDe1++;
    }
}


document.write(" Jai généré " + nombreDe0 + " 0 " + "<br>");
document.write(" Jai généré " + nombreDe1 + " 1 " );