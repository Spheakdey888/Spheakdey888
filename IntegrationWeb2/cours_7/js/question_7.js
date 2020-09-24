let moncompte = parseFloat(prompt("Entrez votre montant"));
let taux = parseFloat(prompt("Entrez votre taux d'intéret"));
let année = parseFloat(prompt("Entrez un nombre d'année"));

for(let i=0 ; i<année; i++){
    let montantAccumule = ((montant*taux) + moncompte)
    document.write("montant actuel : " + montant.toString() +
        "Taux d'intérêt : " + taux.toString() +
        "total accumulé cette année : " + montantAccumule.toString()
    +"<br>"
    );

    montant = montantAccumule;
}