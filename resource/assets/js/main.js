$(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdwon-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdwon-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });
$(window).on('scroll',function(){
      if($(window).scrollTop()){
         $('nav').addClass('black');
      }else{
       $('nav').removeClass('black');
      }  
  });
