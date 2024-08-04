$(document).ready(function(){

    // HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 5000,
        stagePadding:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1500,
        responsive:{
            0:{
               nav: false,
            },
           768: {
            nav: true,
           }
        }
    })


    // PROJECT SLIDER
    $('#project-slider').owlCarousel({
        loop:true,
        autoplay:true,
        // autoplayHoverPause:true,
        autoplayTimeout: 3000,
        margin:0,
        nav:false,
        dots: true,
        dotsText:['<','>'] ,
        smartSpeed: 1500,
        margin: 24,
        responsive:{
            0:{
                items: 2,
                center: true,
                margin: 4,
            },
           768: {
            
               items: 2,
               center: true,
           },
           1140: {
             items: 2,
             center: true,
           }
        }
    })

      // REVIEWS SLIDER
      $('.reviews-slider').owlCarousel({
        loop:true, 
        autoplay:true,
        autoplayTimeout: 7000,
        margin: 10,
        items: 1,
        nav:false,
        dots: true,
        smartSpeed:1500,
       
    })
      // RUNNER SLIDER
      $('.runner-slider').owlCarousel({
        loop:true, 
        autoplay:true,
        autoplayTimeout: 1000,
        items: 10,
        nav:false,
        dots: false,
        smartSpeed:1500,
        responsive:{
            0:{
                items: 3,
            },
           768: {
            
               items: 8,
           },
           1140: {
             items: 12,
           }
        }
       
    })

});