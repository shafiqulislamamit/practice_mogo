$( function (){
   
    //back2top
    $('.back2top') .on('click' , function (){
      $(' html, body ').animate({scrollTop:0},3000) ;
    });
    
    $(window) .scroll(function(){
        var scrolling = $(this)  .scrollTop();
        if(scrolling >200) {
            $('.back2top') .fadeIn(500);
        }
        else{
             $('.back2top') .fadeOut(1000);
        }
            
            
    });
    //counter
   $('.counter').counterUp({
    delay: 10,
    time: 1000
});
    // sticky menu 
    $(window) .scroll(function(){
        var scrolling = $(this)  .scrollTop();
        if(scrolling>150){
            $('.header-bg') .addClass('bg');
        }
        else{
              $('.header-bg') .removeClass('bg');
        }
    });
    
     //animation scroll js
    var html_body = $('html, body');
    $('.menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 70
                }, 1500,);
                return false;
            }
        }
    });
    
    // slideupdown
    $('#shownhide') .click(function(){
        ('p') .slideUp();
    });
    
    //slick
   // $('.slider-main').slick();
    
    $('.slider-main').slick({
  dots: false,
  infinite: true,
    autoplay: true,
    nextArrow: '<i class="nextarrow fas fa-chevron-left left"></i>',
    prevArrow: '<i class="prevearrow fas fa-chevron-right right"></i>',
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
    
});