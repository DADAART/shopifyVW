document.addEventListener('DOMContentLoaded', function () {

// listFiltersHref

         $(".blocFilters ul li").not(".active").click(function() {
          let dataHref = $(this).children('a').data('href');
          location.href = dataHref;
        });

  //listFilterMobile
 if ($(window).width() < 1025) {
        $(".blocFilters li.active").click(function() {

            if ($(".blocFilters ul").hasClass("active")) {
                $(".blocFilters ul").removeClass("active");
            }
            else {
                $(".blocFilters ul").addClass("active");
            }
        });
    }
  //listFilterActual
      $( ".listFilter.active a" ).prepend("<small>Filtre par</small>");
    $( ".listFilter.active a" ).append("<svg xmlns='https://www.w3.org/2000/svg' viewBox='0 0 40 40' width='18' height='18'><path d='m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z'></path></svg>");

  
  //filterByTag
  $(document).ready(function() {

  var arrayArticlesTags = $('.listArticles > ul li')
                        .toArray()
                        .map(e => Array.from(e.classList).join());
    
     for (var i = 0; i < arrayArticlesTags.length; i++) {
        if(window.location.href.indexOf(arrayArticlesTags[i]) > -1) {

      $('.listArticles > ul li').not('.' + arrayArticlesTags[i]).css('display' , 'none');
          
        }
    }
    
  });
                          
        });