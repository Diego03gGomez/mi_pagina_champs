$(document).ready(function () {
    

$(".menu1").click(function (e) { 
    e.preventDefault();
    
$("#fondo_oculto1").fadeIn();

});

   

$(".cont_cerrar").find(".cerrar").click(function (e) { 
    e.preventDefault();
   $("#fondo_oculto1").fadeOut(); 
});


$(".i_menu").click(function (e) { 
    e.preventDefault();
    

$(".fondo_menu").toggleClass("trasladar");

});

$(".equis").click(function (e) { 
    e.preventDefault();
    $(".fondo_menu").toggleClass("trasladar");
    
});


});