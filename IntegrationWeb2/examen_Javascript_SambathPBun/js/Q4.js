// examen Java script - Question 4
// Par [Sambath Pheakdey Bun]
// Le [2020-09-21]

//------------------ Création de la classe ---------------------
//Créer ma classe de monnaie virtuelle

class MonnaieVirtuelle{
    constructor(nomMonnaie, valeurEnUSD, actif, actifUSD){
        this.nomMonnaie = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif = actif;
        this.actifUSD = actif*valeurEnUSD;
    }

//Déclare ma méthode, affiche actif USD
    afficheractifUSD(){
        document.write(this.actifUSD.toString());
    }
}

//------------------ Création de la classe ---------------------
//Créer ma classe de portefeuille

class Portefeuille{
    constructor(nomProprietaire, tableauMonnaies){
        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaies = tableauMonnaies;
    }

//Déclare ma méthode, calculer valeur du portefeuille
    ValeurDuPortefeuille(){
        let total = 0;
        for(let i = 0; i < this.tableauMonnaies.length; i++){
            total =  total + this.tableauMonnaies[i].actifUSD;
        }
        document.write(this.nomProprietaire+ " <br>");
        document.write("La valeur total de votre portefeuille est de : " + total.toString() + " $ USD en actif  " + " <br>");
    }
}


//------------------ Création des objets ---------------------
// Instanciez les monnaies

let bitcoin = new MonnaieVirtuelle("Bitcoin", 9730, 6);
let ethereum = new MonnaieVirtuelle("Ethereum", 194, 20);
let litecoin = new MonnaieVirtuelle("Litecoin", 58, 10);

// créer mon tableau de différente monnaie virtuelle.
let tableauMonnaies = [bitcoin, ethereum, litecoin];

// créer portefeuille de Shany Carle qui affiche le tableau avec toutes ses monnaies virtuelles.
let shanyCarle = new Portefeuille("Shany Carle", tableauMonnaies);


//------------------ Exécuter les méthodes ---------------------
//affichage pour tester le calcul total des monnaies virtuelles

bitcoin.afficheractifUSD();
document.write(" $ USD en actif pour les bitcoin <br>");
ethereum.afficheractifUSD();
document.write(" $ USD en actif pour les ethereum <br>");
litecoin.afficheractifUSD();
document.write(" $ USD en actif pour les litecoin<br>");

// afficher la valeur du portefeuille de Shany Carle.
shanyCarle.ValeurDuPortefeuille();







