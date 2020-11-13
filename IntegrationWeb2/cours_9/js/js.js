
$('.collapse').collapse();

/*
$('#myCollapsible').on('hidden.bs.collapse', function () {
    // do something…
});

 */


function validerFormulaire() {
    var x = document.forms["monFormulaire"]["inputName"].value;
    if (x === "") {
        alert("Veuillez remplir le champs Nom");
        return false;
    }
}
