



var tab2Exp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


for(var i = 0; i <= tab2Exp.length-1 ; i++){
    tab2Exp[i]=Math.floor(Math.random()*10);
    document.write(tab2Exp[i] + "<br>");
}

document.write("<br>");

var max = 0;

for(var i = 0; i <= tab2Exp.length-1 ; i++){
    if(tab2Exp[i] > max){
        max = tab2Exp[i];
    }

}

document.write(max + "<br>");