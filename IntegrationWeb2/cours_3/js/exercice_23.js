var nombre = prompt("Entrez un nombre")

// nombre [0] =
// nombre [1] =
// nombre [2] =







for(i=0; i < nombre.length; i++){
    document.write(nombre[i]);
    document.write("<br>");
}

document.write("------");
document.write("<br>");

for(i =nombre.length - 1; i >= 0; i-- ){
    document.write(nombre[i]);
    document.write("<br>");
}