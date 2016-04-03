$(function(){
   $('input').on('mouseenter', function(){
   		$(this).siblings('.tooltips').animate({opacity: "show"}, "fast");
   });
   $('input').on('mouseleave', function(){
   		$(this).siblings('.tooltips').animate({opacity: "hide"}, "fast");
   });
   $('.button').on('click',function(){
   		$('.tooltips').show('fast');
   });
});