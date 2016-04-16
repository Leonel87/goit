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
        // $('form').mfs();

//checkbox

            
    });
})(jQuery);

