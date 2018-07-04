/*window.onload=function(){
    var loading=document.getElementById("loading");
    loading.parentNode.removeChild(loading);
}*/
/*
document.onreadystatechange=completeLoading;
function completeLoading(){
    if(document.readyState=="complete"){
        alert("加载完毕");
        var loading=document.getElementById("loading");
        loading.parentNode.removeChild(loading);
    }
}
*/


/*导航边栏*/
var menuRight=document.getElementById("cbp-spmenu-1"),
    showRight=document.getElementById("showRight"),
    hideRight=document.getElementById("hideRight"),
    content=document.getElementById("content"),
    isOpen=false;
showRight.addEventListener("click",function(){
    if(!isOpen){
        classie.add( menuRight, 'cbp-spmenu-open' );
        isOpen=!isOpen;
    }
});
hideRight.addEventListener("click",function(){
    if(isOpen){
        classie.remove(menuRight,"cbp-spmenu-open");
        isOpen=false;
    }
});
/*导航栏平滑过渡等*/
$().ready(function(){
    $(".date-list a").eq(0).addClass("active");
    $(".date-list li a").click(function(){
        $("html,body").animate({
            scrollTop:$($(this).attr("href")).offset().top-50+"px"
        },500);
        $(".active").removeClass("active");
        $(this).addClass('active');
    });
});

/*$(document).scroll(function(){
    if($(document).scrollTop()==$($(this).attr("href")).offset().top){
        console.log(1);
    }
});*/
/*hello span  打字机效果*/
$(".hello-s").typed({
    strings: ["夫君子之行","静以修身","俭以养德","非淡泊无以明志","非宁静无以致远"],
    typeSpeed: 100,
    backDelay: 900,
    // loop
    loop: true
});
/*blog模块*/
/*旋转的八卦*/
$(".bagua").click(function(){
    window.open('./html/bagua.html','','width=1000,height=600');
});
$(".adv1").click(function(){
    window.open('./html/adv1.html','','width=1000,height=600');
});
$(".sugar").click(function(){
    window.open('./html/sugar.html','','width=1000,height=600');
});
/*文章模块的动画效果*/
/*JQuery旋转木马*/
$(".owl-carousel").owlCarousel({
    autoPlay: 3000,

    items : 1,
    margin:100,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet : [768,1],
    itemsMobile : [479,1],
    baseClass : "owl-carousel",
    theme : "owl-theme"
});

$('.owl-carousel2').owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet : [768,1],
    itemsMobile : [479,1],
    autoPlay : false,
    baseClass : "owl-carousel",
    theme : "owl-theme"
});
/*技能进度条*/
$(function(){
    $.each($(".skill-pbox"),function() {
        $(this).width($(this).text());
        $(this).children("span").delay(2600).show(500);
    });
});