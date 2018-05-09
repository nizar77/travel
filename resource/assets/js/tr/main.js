$(document).ready(function(){
    $(".menu-icon").on("click",function(){
      /* Act on the event */
      $("nav ul").toggleClass('showing');
      });    
  });
  /*scroollefect*/
  $(window).on("scroll",function(){
      if($(window).scrollTop()){
        $('nav').addClass('black');
      }
      else{
        $('nav').removeClass('black');
         } 
  });
  $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
    }, 4000);