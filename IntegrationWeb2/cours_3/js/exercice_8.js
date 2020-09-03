//Cours 3, exercice 8
//Transférer les valeurs de Fahrenheit -40 à 40 en celsius par tranche de 5.
//Celsius = 5/9(farenheit-32)

var celsius;
//var fahrenheit;

for(var i = -40; i <= 40; i+=5){
        celsius = (5*(i-32))/9;
        document.write(celsius.toString() + "<br>");
}



