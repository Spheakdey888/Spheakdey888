// Cours 2, exercice 8

//Faire un programme qui lit le taux horaire et le nombre d'heures travaillées d'un employé.
// Affichez son salaire. (attention, il es payé le double de son taux horaire pour toutes les heures
// supplémentaires travaillées. Une semaine de travail normale est de 40 heures.

var tauxHoraire;
var tauxHoraireDouble;
var nombreHeuresTravaille;
var salaire;
var salaireReg;



tauxHoraire = parseFloat( prompt("Entrez votre taux horaire"));
nombreHeuresTravaille = parseFloat( prompt("Entrez le nombre d'heure travaillée."));
tauxHoraireDouble = tauxHoraire * 2;
salaire = (  (nombreHeuresTravaille - 40) * tauxHoraireDouble + salaireReg ) ;
salaireReg = tauxHoraire * 40;


if(nombreHeuresTravaille < 40){
    response = (tauxHoraire * 2);
}
else
{
    (nombreHeuresTravaille > 40)
    response = salaire;

}


console.log("Votre salaire est de : " + salaire)