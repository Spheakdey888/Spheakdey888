//Cours 2, exercice 10
// Lire un nombre entier au clavier et afficher le nom du mois correspondant. Si le nombre saisi ne correspond pas à un mois,
// affichez le message suivant : « Mois invalide »


var chiffre;
var response;

chiffre = parseFloat(prompt("Entrez un chiffre."));

if(chiffre > 12)
{
    response = "mois invalide" ;
}

else
    {
   if (chiffre === 1)
   response = "janvier";

   else
   {
       if (chiffre === 2)
           response = "février";

       else
       {
           if (chiffre === 3)
               response = "mars";

           else
           {
               if (chiffre === 4)
                   response = "avril";

               else
               {
                   if (chiffre === 5)
                       response = "mai";

                   else
                   {
                       if (chiffre === 6)
                           response = "juin";

                       else
                       {
                           if (chiffre === 7)
                               response = "juillet";

                           else
                           {
                               if (chiffre === 8)
                                   response = "août";

                               else
                               {
                                   if (chiffre === 9)
                                       response = "septembre";

                                   else
                                   {
                                       if (chiffre === 10)
                                           response = "octobre";

                                       else
                                       {
                                           if (chiffre === 11)
                                               response = "novembre";

                                           else
                                           {
                                               if(chiffre === 12)
                                                   response = "décembre";
                                           }
                                       }
                                   }
                               }
                           }
                       }
                   }
               }
           }
       }
   }
   //Fermeture de la règle
    }


console.log(" votre mois : " + response);


