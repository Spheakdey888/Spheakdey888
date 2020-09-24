// examen Java script - Question 2
// Par [Sambath Pheakdey Bun]
// Le [2020-09-21]


//variables pour les nombres
let nb = 0;
let nb2 = 0;

//Première boucle de 0-995, bond de 100
for(let nb = 0; nb <= 995; nb+=100){
    //Deuxième boucle 0-95, bond de 5
    for(let nb2 = 0; nb2 <= 95; nb2+=5) {
        document.write( nb + nb2 + " " );
    }
    document.write("<br>");
}



