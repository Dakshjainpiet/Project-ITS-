// showing navbar when click menu on mobile view 
const mobile = documnet.querySelector('.menu-toogle');
const mobilelink = documnet.querySelector('.sidebar');

mobile.addEventListner("click",function(){
    mobile.classList.toogle("is-active");
    mobilelink.classList.toogle("active");
})

// close menu when click
mobilelink.addEventListner('clcik',function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toogle("is-active");
        mobilelink.classList.toogle("active");
    }
})

// move the menu to right and left when click back and next
var step = 100;
var stepfilter = 60;
var scrolling = true;

$(".next").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    })
});

$(".back").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    })
})


// when click back and next on menu filters
$(".back-menus").bind("click",function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    })
});

$(".back-menus").bind("click",function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    })
});