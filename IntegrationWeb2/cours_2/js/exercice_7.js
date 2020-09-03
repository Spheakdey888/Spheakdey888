// Cours 2, exercice 7

var chiffre;

var positif;
var negatif;
var zero;


chiffre = parseInt(prompt("Entrez votre chiffre."));

if(chiffre > 0)
{
    response = " positif" ;
}
else
{
    if (chiffre < 0 )
    {
        response = " negatif " ;
    }
    else
        {
        (chiffre === 0)
            response = " zero " ;
        }
}



console.log("Message : " + response)