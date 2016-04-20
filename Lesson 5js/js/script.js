//jcarousel

(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();

//slide down menu
            $( '.dropdown' ).hover(
                function(){
                    $(this).children('.sub-menu').slideDown(200);
                },
                function(){
                    $(this).children('.sub-menu').slideUp(200);
                }
            );

//select
             $('form').mfs({
                 'enableScroll' : true,
                 'maxHeight'    : 150
             });
        

//checkbox
$('.niceCheck').click(function() {
    changeCheck($(this));
   });
   $('.niceCheck').each(function() {
    changeCheckStart($(this));
   });

   function changeCheck(el) {
    var el = el,
    input = el.find("input").eq(0);
     if(!input.attr("checked")) {
        el.css("background-position","0 -17px");
        input.attr("checked", true)
}
     else {
        el.css("background-position","0 0");
        input.attr("checked", false)
    };
    if (input.attr("disabled")) {
        el.css("background-position","0 -17px");
    };
     return true;

   };
   function changeCheckStart(el) {
        var el = el,
        input = el.find("input").eq(0);
        if(input.attr("checked")) {
        el.css("background-position","0 -17px");
        };

        if (input.attr("disabled")) {
            el.css({
                background:"url(img/customCheckDisabled.png) 0 -17px"
            });
        };

     return true;

   };

            
    });
})(jQuery);

