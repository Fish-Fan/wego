/**
 * Created by yanfeng-mac on 2016/10/22.
 */
(function () {
    var windowHeight = $(window).height();
    var scrollTop = 0;
    var nav = $(".nav");
    var navId = $(".web-id-a");
    var nvaA = $(".nav-a");
    //fisrtScreen
    var mainBg = $(".bg-main");
    //whoWeAre
    var whoWeAre = $(".whoWeAre");
    var whoWeAreOffsetTop = whoWeAre.offset().top;
    var whoWeAreBg = $(".bg-whoWeAre");
    //joinUs
    var joinUs = $(".joinUs");
    var joinUsOffsetTop = joinUs.offset().top;
    var joinUsBg = $(".bg-join");


    $(window).scroll(function () {
        scrollTop = $(document).scrollTop();
        //首屏图片滚动事件
        if(scrollTop > 0){
            mainBg.css({
                "transform":"translate3d(0px,"+ (scrollTop*.3)+"px" +",0px)"
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
        //whoWeAre背景滚动事件
        if(scrollTop + windowHeight > whoWeAreOffsetTop)
        {
            whoWeAreBg.css("transform","translate3d(0px,"+ (scrollTop - whoWeAreOffsetTop)*0.3 +"px,0px)");
        }

        //joinUs背景滚动事件
        if(scrollTop + windowHeight > joinUsOffsetTop){
            joinUsBg.css("transform","translate3d(0px,"+ (scrollTop - joinUsOffsetTop)*0.3 +"px,0px)");
        }
    });

}());
