
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
        });
        
        $('.main-nav ul li a').click(function () {
            $("this").removeClass("active");
            $("this").addClass("active");
        });

        
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1){  
                $('.navbar-default').addClass("navbar-shrink");
            }
            else{
                $('.navbar-default').removeClass("navbar-shrink");
            }
        });
        
		
		$('.search-wrap > a').click(function (e) {
			e.preventDefault();
            $("body").toggleClass("searchbar-show");
        });
		
		
		
        
        //sticky header
            'use strict';
            var defaults = {
                topOffset: 100, //px - offset to switch of fixed position
                hideDuration: 300, //ms
                stickyClass: 'is-fixed'
            };

            $.fn.stickyPanel = function(options){
                if(this.length == 0) return this; // returns the current jQuery object

                var self = this,
                    settings,
                    isFixed = false, //state of panel
                    stickyClass,
                    animation = {
                        normal: self.css('animationDuration'), //show duration
                        reverse: '', //hide duration
                        getStyle: function (type) {
                            return {
                                animationDirection: type,
                                animationDuration: this[type]
                            };
                        }
                    };

                // Init carousel
                function init(){
                    settings = $.extend({}, defaults, options);
                    animation.reverse = settings.hideDuration + 'ms';
                    stickyClass = settings.stickyClass;
                    $(window).on('scroll', onScroll).trigger('scroll');
                }

                // On scroll
                function onScroll() {
                    if ( window.pageYOffset > settings.topOffset){
                        if (!isFixed){
                            isFixed = true;
                            self.addClass(stickyClass)
                                .css(animation.getStyle('normal'));
                        }
                    } else {
                        if (isFixed){
                            isFixed = false;

                            self.removeClass(stickyClass)
                                .each(function (index, e) {
                                // restart animation
                                // https://css-tricks.com/restart-css-animation/
                                void e.offsetWidth;
                            })
                                .addClass(stickyClass)
                                .css(animation.getStyle('reverse'));

                            setTimeout(function () {
                                self.removeClass(stickyClass);
                            }, settings.hideDuration);
                        }
                    }
                }

                init();

                return this;
            }
            $(function () {
                $('#fixed').stickyPanel();
            });
     

        
        //mixit-up
       /* if($('#Container').length){
        var mixer = mixitup('#Container');
        }*/
        
        
        //Category dropdown filter;
        $('.dropdown').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).toggleClass('active');
            $(this).find('.dropdown-menu').slideToggle(300);
        });
        $('.dropdown').focusout(function () {
            $(this).removeClass('active');
            $(this).find('.dropdown-menu').slideUp(300);
        });
        $('.dropdown .dropdown-menu li').click(function () {
            $(this).parents('.dropdown').find('span').text($(this).text());
        });
        
        
       
		
        if($('#testimonial-slider').length){
            $('#testimonial-slider').slick({
                dots: false,
                arrows:true,
                autoplay:false,
                autoplaySpeed:3000,
                centerMode: true,
                centerPadding: '0',
                navigation:false,
                infinite: true,
                loop: true,
                speed: 900,
                slidesToShow:3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            dots: true,
                            slidesToScroll: 1,
                            autoplay: true,
                            speed: 1500,
                            centerPadding: '36px',
                            controlNav: false,
                            directionNav: false,
                            arrows: false,
                            loop: false,
                        }
                    },

                ]
            })
        }
        
        $('#testimonial-slider .slick-prev').addClass('disabled');
        $('#testimonial-slider .slick-next').click(function(){
            $('#testimonial-slider .slick-prev').removeClass('disabled');
        })
		
		
		
	   if($('#direction-item-slider').length){
            $('#direction-item-slider').slick({
                dots: true,
                arrows:false,
                autoplay:false,
                autoplaySpeed:3000,
                centerMode: true,
                centerPadding: '0',
                navigation:false,
                infinite: true,
                loop: true,
                speed: 900,
                slidesToShow:4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            dots: true,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            centerPadding: '36px',
                            controlNav: false,
                            directionNav: false,
                            arrows: false,
                            loop: false,
                        }
                    },

                ]
            })
        }	
		
		
		
		
		
		
 /*$('#carousel-example').on('slide.bs.carousel', function (e) {
    
        CC 2.0 License Iatek LLC 2018 - Attribution required
    
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
 });*/
        
   
        
        
        //Project page
     
        
       

        
        
        
	})// End ready function.
   

})(jQuery)

