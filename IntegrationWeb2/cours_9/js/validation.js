function validerFormulaireChat() {

    let couleurDuChat = document.getElementById("couleurs");

    let couleurPermise = false;

    switch(couleurDuChat.value) {
        case "blanc":
            couleurPermise = true;
            break;
        case "noir":
            couleurPermise = true;
            break;
        case "brun":
            couleurPermise = true;
            break;
        case "mixte":
            couleurPermise = true;
            break;
    }

    if(couleurPermise === false){
        alert("Couleur non permise !!!! ");
    }
    return couleurPermise;
}