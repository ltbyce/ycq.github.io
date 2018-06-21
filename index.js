


/*导航边栏*/
var menuRight=document.getElementById("cbp-spmenu-1"),
    showRight=document.getElementById("showRight"),
    hideRight=document.getElementById("hideRight"),
    content=document.getElementById("content"),
    isOpen=false;
showRight.onclick=function(){
    classie.remove(menuRight,"cbp-spmenu-close");
    classie.add( menuRight, 'cbp-spmenu-open' );
    isOpen=!isOpen;
}
hideRight.onclick=function(){
    if(!isOpen){
        classie.remove(menuRight,"cbp-spmenu-open");
    }
    isOpen=!isOpen;
    classie.add( menuRight, 'cbp-spmenu-close' );
}
content.onclick=function(){
    classie.remove(menuRight,"cbp-spmenu-open");
    isOpen=false;
}

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
~function(){
    minigrid('.blg-item', '.con-item',29, null,);
    window.addEventListener('resize', function(){
        minigrid('.blg-item', '.con-item');
    });
}();



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
