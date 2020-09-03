// Cours 2, exercice 14


var a;
var b;
var c;



a = parseInt(prompt(" Entrez le nombre A "));
b = parseInt(prompt(" Entrez le nombre B "));
c = parseInt(prompt(" Entrez le nombre c "));


//Est-ce que A est le plus grand?
if(a > b){
    if( a> c){
        console.log("Le plus grand est " + a);
    }
}

if(b > a){
    if( b > c){
        console.log("Le plus grand est " + b);
    }
}

if(c > a){
    if( c > b){
        console.log("Le plus grand est " + c);
    }
}


//Est-ce que A est le plus petit?

if(a < b){
    if( a < c){
        console.log("Le plus petit est " + a);
    }
}

if(b < a){
    if( b < c){
        console.log("Le plus petit est " + b);
    }
}

if(c < a){
    if( c < b){
        console.log("Le plus petit est " + c);
    }
}