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

    /*==========image designer============
    var _ourCityAbout = {
		x : 1, // tiles in x axis
		y : 3, // tiles in y axis
		gap:15
	};
	$.fn.splitInTiles = function( options ) {
		var o = $.extend( {}, _ourCityAbout, options );
		return this.each(function() {
			var $container = $('.aboutSplit'),
// 				width = $container.width(),
				height = $container.height(),
				$img = $container.find('img'),
				n_tiles = o.x * o.y,
				wraps = [], $wraps;
			for ( var i = 0; i < n_tiles; i++ ) {
				wraps.push('<div class="aboutTile"/>');
			}
			$wraps = $( wraps.join('') );
			// Hide original image and insert tiles in DOM
			$img.hide().after( $wraps );
			// Set background
			$wraps.css({
// 				width: (width / o.x) - o.gap,
				height: (height / o.y) - o.gap,
								marginBottom: o.gap +'px',
				marginRight: o.gap +'px',
				backgroundImage: 'url('+ $img.attr('src') +')'
			});
			// Adjust position
			$wraps.each(function() {
				var pos = $(this).position();
				$(this).css( 'backgroundPosition', -pos.left +'px '+ -pos.top +'px' );
			});
		});
	};
	$('.aboutSplit').splitInTiles();*/


    
    
    
})