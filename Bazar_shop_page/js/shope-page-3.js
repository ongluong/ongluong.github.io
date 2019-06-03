
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$('.thums').owlCarousel({
    loop:true,
    margin:18,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$(document).ready(function(){
    $("#dropdown").click(function(){
        $("#dropdown-content").slideToggle("fast");
    });
});
$(document).ready(function(){
    $("#dropdown-header").click(function(){
        $("#dropdown-content-header").slideToggle("fast");
    });
});
$(document).ready(function(){
    $("#dropdown-header3").click(function(){
        $("#dropdown-content-header3").slideToggle("fast");
    });
});
$(document).ready(function(){
    $("#dropdown-header2").click(function(){
        $("#dropdown-content-header2").slideToggle("fast");
    });
});
$(document).ready(function(){
    $("#dropdown-search").click(function(){
        $("#dropdown-content-search").toggle("fast");
    });
});
$(document).ready(function(){
            $(".content1").hide();
            $(".content1:first").show();
            $(".review-1 li:first").addClass("active");
            $(".review-1 li").click(function(){
                $(".review-1 li").removeClass("active");
                $(this).addClass("active");
                $(".content1").hide();
                var selectored = $(this).find("a").attr("href");
                $(selectored).show();
            });
            $(".xzoom, .xzoom-gallery").xzoom({ zoomWidth: 700 , title: true, tint: '#333', });

        });
// 1 đầu tiên thì làm cho thằng tab-content ẩn đi.
// 2 làm cho thằng tab content đầu tiên hiển thị
// 3 gọi đến thằng li đầu tiên và sau đó đc add class active
// 4 khi li đc click 
// 5 khi thằng li dc active thì nó sẽ bị xóa class active
// 6 chính thằng li nào đc click thì sẽ đc add class active vào
// 7 tab-content lại bị ẩn đi
// 8 tạo biến bằng chính thàng li.tìm đến a có thuôc tính href.biến bằng cái biến có href ở trên thì show ra

