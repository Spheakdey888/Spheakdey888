// Cours 2, exercice 6
// Lire une note au clavier et afficher la lettre correspondante.
// 90 et plus = A
// Entre 80 et 90 = B
// Entre 70 et 80 = C
// Entre 60 et 70 = D
// Moins de 60 = E

var notePoucentage;

var response;

notePoucentage = parseInt(prompt("Entrez votre note chiffrée."));



if(notePoucentage >= 90)
{
    response = " Votre note : A " ;
}
else
{
    if (notePoucentage >= 80 )
    {
        response = " Votre note : B " ;
    }
    else
    {
        if (notePoucentage >= 70 )
        {
            response = " Votre note : C " ;
        }
        else
        {
            if (notePoucentage >= 60 )
            {
                response = " Votre note : D " ;
            }
            else
            {
                response = " Votre note : E " ;
            }
        }
    }
}


console.log("Message : " + response)

