function imgBg(block, img) {
	var srcImg = $(img).attr('src');
	$(block).css({'background-image': 'url('+srcImg+')'});
}



(function($){
	$(function(){

		imgBg('.js-headerBg', '.js-headerImg');

		$('.slider').slick({
		dots: false,
		// arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
		});
});
})(jQuery);



$(function () {
  'use strict';
  var input = document.querySelector('#enter');
  var btn = document.querySelector('#searchPartners');
  
  
  // masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
    gutter: 10
  });
  $grid.imagesLoaded().progress(function () {
  $('.grid-item').imagefill();
  $grid.masonry();
  });
  

  // request img
  function imgRequest() {
    var URL = "https://pixabay.com/api/?key=2772910-2156615be000a36d2adedeaa9&q="+input.value+"&image_type=photo&callback=?";
    
    $.ajax({
        url: URL,
        dataType: "jsonp",
        success: function (data) {
      var $img = $('.grid-img');
      var $title = $('.grid-title');
      for (var i = 0; i < 7; i++) {
        $img[i].src = data.hits[i].webformatURL;
        $title[i].innerHTML = data.hits[i].tags;
      }
    }
        
    });
    input.value = '';
  }
  
  imgRequest();
  
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    imgRequest();
  });
  
  input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      imgRequest();
  }
  });
});




