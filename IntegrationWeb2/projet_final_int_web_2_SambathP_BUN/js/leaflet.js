// Projet final Int. Web 2
// Par [Sambath Pheakdey Bun]
// Le [2020-11-12]

//-------- Script leaflet carte --------//

var mymap = L.map('mapid').setView([ 45.4988496, -73.6239598], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FtYmF0aCIsImEiOiJja2g5Z2N2ZTgwMWVnMnh1c21pNW1pY3RpIn0.is60W25P-2CpRHfn2tC7kg'
}).addTo(mymap);

var circle = L.circle([45.4988496, -73.6239598], {
    color: 'rgba(112,112,112,0.74)',
    fillColor: 'rgba(112,112,112,0.74)',
    fillOpacity: 0.3,
    radius: 1800
}).addTo(mymap);

var circle = L.circle([45.4988496, -73.6239598], {
    color: 'rgba(238,67,71,0.74)',
    fillColor: 'rgba(238,67,71,0.74)',
    fillOpacity: 0.3,
    radius: 1400
}).addTo(mymap);

var circle = L.circle([45.4988496, -73.6239598], {
    color: '#d5cb36',
    fillColor: '#d5cb36',
    fillOpacity: 0.3,
    radius: 1000
}).addTo(mymap);

var circle = L.circle([45.4988496, -73.6239598], {
    color: '#049277',
    fillColor: '#049277',
    fillOpacity: 0.3,
    radius: 500
}).addTo(mymap);

var marker = L.marker([45.4988496, -73.6239598]).addTo(mymap);

//-------- fin script pour leaflet carte --------//

//------ valider formulaire de commande avec le check box -----//
function validerFormulaireCommande() {
    let okay = false;

    for(let i=1;i<=18;i++) {
        let checkbox = document.getElementById("soupe"+i.toString());
        let select = document.getElementById("qteSoupe"+i.toString());

        if(checkbox.checked && select.value !== ''){
            okay = true;
            break;
        }

    }

    if(okay)
        console.log("Thank you for checking a checkbox");
    else
        alert("Veuillez sélectionner une soupe et une quantité");

    return okay;
}