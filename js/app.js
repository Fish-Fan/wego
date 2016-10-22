/**
 * Created by yanfeng-mac on 2016/10/22.
 */
(function () {
    var windowHeight = $(window).height();
    var scrollTop = 0;
    var nav = $(".nav");
    var navId = $(".web-id-a");
    var nvaA = $(".nav-a");
    var mainBodyWrapper = $(".main-body-wrapper .bg-main");

    $(window).scroll(function () {
        scrollTop = $(document).scrollTop();
        //首屏图片滚动事件
        if(scrollTop > 0){
            mainBodyWrapper.css({
                "background-image":"url(../img/bg.jpeg)",
                "transform":"translate3d(0px,"+ scrollTop+"px" +"0px"
            });
        }
        //导航栏事件
        if(scrollTop > windowHeight){
            if(!nav.hasClass("nav-down")){
                nav.addClass("nav-down");
                navId.css("color","#5e5e5e");
                nvaA.css("color","#5e5e5e");
            }

        }
        else {
            if(nav.hasClass("nav-down")){
                nav.removeClass("nav-down");
                navId.css("color","#fff");
                nvaA.css("color","#fff");
            }
        }
    });

}());
