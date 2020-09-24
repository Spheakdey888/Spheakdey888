//Créer ma classe
class JoeurHockey{
    constructor(nom, nbButs, nbPasses) {
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }

    //Déclare ma function
    afficherNbPoints(){
        let textAfficher = (this.nbButs + this.nbPasses).toString();
        document.write(textAfficher + " <br>");
    }
}

// Créer ma classe équipe
class Equipe{
    constructor(joueur1, joueur2, joueur3) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.joueur3 = joueur3;
    }

}



// Déclare mes variables
let sydneyC = new JoeurHockey("Sydney Crosby", 454, 787);
let marioL = new JoeurHockey("Mario Lemieux",690,1033);
let jaromirJ =new JoeurHockey("Jaromir Jagr", 766,1155);

let monEquipe = new  Equipe(sydneyC,marioL,jaromirJ);


// important d'écrire cette ligne pour aller appeler et lire la commande function afficherPoint dans la classe

sydneyC.afficherNbPoints();
marioL.afficherNbPoints();
jaromirJ.afficherNbPoints();

monEquipe.joueur1.afficherNbPoints();
