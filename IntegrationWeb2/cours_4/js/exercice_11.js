
var stats = new Array(11);

stats.fill(0,0,stats.length);

for(var i = 0; i <= 10; i++){
    var nbEnfants = parseInt(prompt("Combien avez-vous d'enfants ?"));

    if(nbEnfants >= 10){
        stats[10]++; // stats[10] = stats[10] + 1;
    }
    else
    {
        stats[nbEnfants]++;
    }

    document.write(nbEnfants.toString() + "<br>");
}

for(var i=0; i <= stats.length-1; i++){
    document.write("# de famille avec "+i.toString()+" enfants : "+stats[i].toString()+"<br>");
}

