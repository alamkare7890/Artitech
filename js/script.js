$(document).ready(function () {

    $('.banner-slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.content-slide',
    }); 
    $('.content-slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor:'.banner-slide',
        
    
    })

})