$('.header-banner .owl-carousel').owlCarousel({
            loop:true,
            dots:false,
            nav:false,
            smartSpeed:2000,
            autoplay:true,
            autoplayTimeout:4000,
          autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:1
                },
                991:{
                    items:1
                },
                1199:{
                    items:1
                }
            }
        });
$(document).ready(function(){
        $(window).scroll(function(){
            if( $(window).scrollTop() > 300 ){
                $('.header-top-menu').addClass('nav-scoll');
            }
            else{
                $('.header-top-menu').removeClass('nav-scoll');
            }
        });
        $("#back-to-top").click(function(){
            $("html,body").animate({
                scrollTop : 0 },100);
            return false;
        });
        $(window).scroll(function(){
            if( $(window).scrollTop() < 500){
                $('#back-to-top').addClass('back-to-top-opacity0');}
            else{
                $('#back-to-top').removeClass('back-to-top-opacity0');}
        });
});