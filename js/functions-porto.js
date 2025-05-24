$( function() {

   //======> Isotope Script 
   $(window).on("load",function(e){

      var $container = $('#portfolio-grid');
      var responsive_width = 1;

      if ($(window).width() >= 1200) {
         responsive_width = 2;
      }else if ($(window).width() >= 992) {
         responsive_width = 2;
      }else if ($(window).width() >= 768) {
         responsive_width = 2;
      }else if ($(window).width() >= 478) {
         responsive_width = 2;
      }

      $container.imagesLoaded( function(){
        $container.isotope({
          layout: "vertical",
          itemSelector : '.porto_item',
          resizable: false,
          masonry: {
            columnWidth: $container.width() / responsive_width
          }
        });
      });

      $(window).smartresize(function(){
        var responsive_width = 1;

        if ($(window).width() >= 1200) {
           responsive_width = 2;
        }else if ($(window).width() >= 992) {
           responsive_width = 2;
        } else if ($(window).width() >= 768) {
         responsive_width = 2;
        } else if ($(window).width() >= 478) {
         responsive_width = 2;
        }

        $container.isotope({
          masonry: {
            columnWidth: $container.width() / responsive_width
          }
        });

      });

    });

});