//Cours 1, exercice 4
//Calculer le salaire brut d'un employé. Il est payé à l'heure et les données concernant le taux horaire et le nombre d'heures travaillées sont fournies en entrée.

//demander le taux horaire
tauxHoraire = prompt( "Entrez le taux horaire de l'employé");//"17.55"
tauxHoraire = parseFloat(tauxHoraire) //17.55

//demander le nombre d'heure travaillé
nbreHeure = prompt( "Entrez le nombre d'heure travaillé par semaine");//"35"
nbreHeure = parseFloat(nbreHeure) //35

//retourner le calcul du salaire brut
resultat4 = tauxHoraire * nbreHeure;// 614.25

console.log("Le salaire de l'employé est de : "  + resultat4 + "$");
