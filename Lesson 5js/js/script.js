$(function() {
    $('.jcarousel').jcarousel({
        $('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
});

$('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
});
    });
});









//плагин для слайда дз 11-12
(function($){
  $(function(){
    $('.js-slider').mySlider({
      dots: 'ololol',
      arrows:true,
      newKey:12315,
    });
  });
})(jQuery);



(function($){
  $.fn.myslider = function(option) {
    var _default = {
      autoSlide: false,
      dots:false,
      arrows: false
    }
    var _setting = $.extend(_default, option);
    var _this = $(_this);

  };
})(jQuery);