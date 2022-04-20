
//onscroll animation

var $animation_elements = $('.animate-from-bottom, .animate-from-left, .animate-from-right');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if (element_top_position <= window_bottom_position) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');




//onscroll animation
var $animation_elements = $('.animate-from-bottom, .animate-from-left, .animate-from-right');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if (element_top_position <= window_bottom_position) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


if($('#ap-item-wrap').length){
var inview = function(elem){
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).outerHeight();
    var vpTop = $(window).scrollTop();
    var vpBottom = vpTop + $(window).height();
    return elemBottom > vpTop && elemTop < vpBottom;
};
(function flexibleanim(){
    $(window).on("scroll",function() {
        var fade = function(index) {
            var glitem = $('#ap-item-wrap > .ap-item');
            glitem.eq(index).animate({
                opacity: 1
            },500, function() {
                if (index < glitem.length) {
                    fade(index + 1);
                }
            })
        }

        if(inview("#ap-item-wrap")){
            var tr = setTimeout(function(){
                fade(0);
            },500);
            // $(window).off("scroll");
        }
    });
})();
}
if($('#tab-container').length){
var inview = function(elem){
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).outerHeight();
    var vpTop = $(window).scrollTop();
    var vpBottom = vpTop + $(window).height();
    return elemBottom > vpTop && elemTop < vpBottom;
};
(function flexibleanim(){
    $(window).on("scroll",function() {
        var fade = function(index) {
            var glitem = $('#tab-container > .tab-item');
            glitem.eq(index).animate({
                opacity: 1
            },500, function() {
                if (index < glitem.length) {
                    fade(index + 1);
                }
            })
        }

        if(inview("#tab-container")){
            var tr = setTimeout(function(){
                fade(0);
            },500);
            // $(window).off("scroll");
        }
    });
})();
}