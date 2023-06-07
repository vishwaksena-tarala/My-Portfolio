$(document).ready(function () {
    $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $(".navbar").addClass("sticky");
    } else {
        $(".navbar").removeClass("sticky");
    }
    if(this.scrollY>500){
        $(".scrollup").addClass("show");
    }else{
        $(".scrollup").removeClass("show");
    }
    });
    $(".scrollup").click(function(){
        $('html').animate({scrollTop: 0});
    })

    $(".menubar").click(function () {
    $(".menu").toggleClass("active");
    $(".menubar i").toggleClass("active");
    });

    var typed=new Typed(".typing",{
        strings:['Btech Student','Coding Enthusiast','Curious Learner','Creative thinker','Inovative Problem Solver'],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    }) 

    $(".projects").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
        items: 1, // Use 'items' instead of 'item'
        nav: false,
        },
        600: {
        items: 2, // Use 'items' instead of 'item'
        nav: false,
        },
        1000: {
        items: 3, // Use 'items' instead of 'item'
        nav: false,
        },
    },
    });
});
