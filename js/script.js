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

    $('.work-slide').slick({
        asNavFor:'.work-content-slide',
        arrows: false,
    
    })
    $('.work-content-slide').slick({
        asNavFor: '.work-slide',    
        arrows: false,
        
    })
    
    /*=======bg-slide========*/
    $('.slide-bg').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    
    
    
    })
    /*=======client-slide========*/
    $('.slide-client').slick({
    
        arrows: false,
    
    
    
    })

        
    
    
    
})