//Cours 1, exercice 7
//Programmer un convertisseur degré celsius à fharenheit

//entrée la température en celsius
tempEnCelsius = prompt( "Entrez une température en Celsius");
tempEnCelsius = parseFloat(tempEnCelsius)

//retourner le calcul de la conversion
tempFahrenheit = (tempEnCelsius * (9/5)) + 32;


console.log( " Votre temperature en fahrenheit : " + tempFahrenheit)