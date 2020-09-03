var tableau = [];
var compteurFaux= 0;
// création du tableau
for (var i = 0; i< 1000; i++){
    var bool;
    if (Math.round(Math.random()) === 0){
        bool = false;
    }
    else{
        bool = true;
    }
    tableau.push(bool);
}

//compter le nombre de faux et de vrai
for (var i = 0; i< 1000; i++){
   if (tableau[i] === false){
       compteurFaux++;
   }
}

document.write ("Dans le tableau il y a exactement " + compteurFaux.toString() + "faux" +"<br>");
document.write ("Dans le tableau il y a exactement " + (1000 - compteurFaux).toString() + "vrai");