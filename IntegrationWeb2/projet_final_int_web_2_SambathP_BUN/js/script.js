// Projet final Int. Web 2
// Par [Sambath Pheakdey Bun]
// Le [2020-11-12]

//------- Animation arrow down page accueil------//
$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
    //250 is fade pixels
});





