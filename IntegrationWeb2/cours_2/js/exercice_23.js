// cours 2, exercice 23

var indiceDePollution
var listeA;
var listeB;
var listeC;

indiceDePollution = Math.random();

indiceDePollution = indiceDePollution.toFixed(2)

document.write("L'indice de pollution est égal à : " + indiceDePollution + "<br>");

// si indice > 0.31 on averti la liste A
if(indiceDePollution >0.04 && indiceDePollution <0.31) {
    document.write("Normale");
}

if(indiceDePollution >= 0.31 && indiceDePollution < 0.40){
    document.write("Avertir la liste A");
}

else if( indiceDePollution >= 0.40 && indiceDePollution < 0.50){
    document.write("Avertir la liste A et B");
}

else if (indiceDePollution > 0.50 ){
    document.write("Avertir la liste A, B et C");
}

else{
    document.write("Valeur imposible.");
}