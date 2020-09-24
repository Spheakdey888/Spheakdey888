class Cylindre {
    constructor(hauteur, rayon2) {
        this.hauteur = hauteur;
        this.rayon2 = rayon2;
    }
    GetVolume(){

        return this.GetVolume(Math.PI * rayon2 * hauteur);
        document.write("Le volume du " + Cylindre1 + "est de" + this.GetVolume());

    }
}
let Cylindre1 = new Cylindre(1, 2);
let Cylindre2 = new Cylindre(2, 4);