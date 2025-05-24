$( function() {   

   //======> Animate Progress Bar Lines
   function progress_bar() {
      var speed = 30;
      var items = $('.progress_bar').find('.progress_bar_item');

      items.each(function () {
         var item = $(this).find('.progress');
         var itemValue = item.data('progress');
         var i = 0;
         var value = $(this);

         var count = setInterval(function () {
            if (i <= itemValue) {
               var iStr = i.toString();
               item.css({ 'width': iStr + '%' });
               value.find('.item_value').html(iStr + '%');
            } else {
               clearInterval(count);
            }
            i++;
         }, speed);
      });
   }

   //======> Animate Pie Charts
   function initPieCharts() {
      $('.progress_circle .circle').easyPieChart({
         size: 120,
         barColor: "#735151",
         scaleLength: 0,
         lineWidth: 6,
         trackColor: "#c6b9a7",
         lineCap: "round",
         animate: 2000,
         onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
         }
      });
   }

   // Wait for preloader to disappear and AOS to be ready
   window.addEventListener("load", function () {
      setTimeout(() => {

         // aos:in — trigger animation on scroll
         document.addEventListener("aos:in", ({ detail }) => {
            if (detail.dataset.aosId === 'skills') {
               progress_bar();
            }
            if (detail.dataset.aosId === 'tools') {
               initPieCharts();
            }
         });

         // Trigger if already visible
         const skillsSection = document.querySelector('[data-aos-id="skills"]');
         const toolsSection = document.querySelector('[data-aos-id="tools"]');

         if (skillsSection && isElementInViewport(skillsSection)) {
            progress_bar();
         }

         if (toolsSection && isElementInViewport(toolsSection)) {
            initPieCharts();
         }

         function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
               rect.top < window.innerHeight &&
               rect.bottom > 0
            );
         }

      }, 1100); // delay slightly longer than preloader fade-out
   });

   //======> Tooltip Script  
   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
   });

});
