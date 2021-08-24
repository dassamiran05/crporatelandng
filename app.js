$('.move-up button').click(function(){
    $('html,body').animate({
        scrollTop:0
    },2000);
});

// const responsive = {
//     0:{
//         items:1
//     },
//     320:{
//         items:1
//     },
//     560:{
//         items:2
//     },
//     960:{
//         items:3
//     }
// }

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:3000,
//     dots:true,
//     nav:false,
//     responsive:responsive

// });

AOS.init();