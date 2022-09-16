$(document).ready(function(){

    $( function() {
        $( "#accordion" ).accordion();
    } );

    $('.owl-carousel').owlCarousel({
        loop:true,
        center:true,
        margin:15,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });
});


