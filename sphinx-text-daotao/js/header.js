$(document).ready(function() {
	$(".btn_nav_bar").click(function(){
		$(".nav.header").fadeToggle();
	});
	 $(window).scroll(function(){
        if( $(window).scrollTop() > 300 ){
            $('.menu').addClass('nav-scoll');
        }
        else{
            $('.menu').removeClass('nav-scoll');
        }
    });
	   $("#back-to-top").click(function(){
            $("html,body").animate({
                scrollTop : 0 },100);
            return false;
        });
		$(window).scroll(function(){
            if( $(window).scrollTop() < 500){
                $('#back-to-top').addClass('back-to-top-opacity0');
				}
            else{
                $('#back-to-top').removeClass('back-to-top-opacity0');}
        });

});