$(document).ready(function() {
   $('.div1').mouseenter(function() {
       $(this).animate({
           height: '400px'
       });
	   jQuery('.button', this).fadeIn('slow');
	   jQuery('.buttonText', this).fadeIn('fast');
	   $('#left-wing').rotate({animateTo:10, duration: 200});
	   $('#right-wing').rotate({animateTo:-10, duration: 200});
   }).mouseleave(function() {
       $(this).animate({
           height: '30px'
       }); 
	   jQuery('.button', this).hide();
	   jQuery('.buttonText', this).hide();
	   $('#left-wing').rotate({animateTo:-10});
	   $('#right-wing').rotate({animateTo:10});
   });
   $('#about-button').click(function(){
	   $('#about-banner').animate({
           height: '30px'
       }); 
	   $('.button').hide();
	   $('.buttonText').hide();
	   $('#left-wing').rotate({animateTo:-10});
	   $('#right-wing').rotate({animateTo:10});
       $('.aboutBox').slideToggle('fast');
   });
   $('#close-about').click(function(){
	   $('.aboutBox').slideToggle('fast');
   });
});