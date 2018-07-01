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
/*content.addEventListener("click",function(){
 if(isOpen){
 classie.remove(menuRight,"cbp-spmenu-open");
 isOpen=false;
 }
 });*/
/*$("#cbp-spmenu-1>a").click(function(){
    $('html,body').animate({scrollTop:$(this).offset().top}, 800);
});*/

/*导航栏平滑过渡*/
$(".date-list li a").click(function(){
    $("html,body").animate({
        scrollTop:$($(this).attr("href")).offset().top-50+"px"
    },500);

});
/*hello span  打字机效果*/
$(".hello-s").typed({
    strings: ["夫君子之行","静以修身","俭以养德","非淡泊无以明志","非宁静无以致远"],
    typeSpeed: 100,
    backDelay: 900,
    // loop
    loop: true
});
/*blog模块 瀑布流布局*/
/*$(function(){
    var divWidth=$(".blg-item").innerWidth();
    var mainWidth=$(".blg-main").width();
    var num=Math.floor(mainWidth/divWidth);
    function waterFlow(){
        var arr=[];
        for(var i=0;i<$(".blg-item").length;i++){
            if(i<num){
                arr[i]=$(".blg-item").eq(i).innerHeight();
            }else{
                var minImgHeight=Math.min.apply(null,arr);
                var index=getMinIndex(arr,minImgHeight);
                $(".blg-item").eq(i).css({"position":"absolute","top":minImgHeight+"px","left":($(".blg-item").eq(index).offset().left-189.6)+"px"});
                console.log($(".blg-item").eq(index).offset());
                arr[index]+=$(".blg-item").eq(i).innerHeight();
            }
        }
    }
    function getMinIndex(arr,min){
        for(var i in arr){
            if(arr[i]==min){
                return i;
            }
        }
    }
    waterFlow();
});*/

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