
var taxes;

for(var i = 5; i <= 100; i=i+5){
    taxes = ((i/100)*9);
    document.write( " votre montant est de " + i + "$"+ " avec " + taxes + "$." +"<br>");
}