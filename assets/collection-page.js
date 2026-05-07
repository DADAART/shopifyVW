document.addEventListener("DOMContentLoaded", function () {
  //listFiltres
  if ($(window).width() < 1025) {
    $(".blocFilters li.active").click(function (event) {
      event.preventDefault();

      if ($(".blocFilters ul").hasClass("active")) {
        $(".blocFilters ul").removeClass("active");
      } else {
        $(".blocFilters ul").addClass("active");
      }
    });
    $(".Products").click(function () {
      $(".blocFilters ul").removeClass("active");
    });
  } else {
    $(".blocFilters ul").hover(function () {
      if ($(".blocFilters ul").hasClass("active")) {
        $(".blocFilters ul").removeClass("active");
      } else {
        $(".blocFilters ul").addClass("active");
      }
    });
  }

  // scrollMobile

  if ($(window).width() < 1025) {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 1) {
        $(".Header").addClass("scroll");
        $(".template-collection").addClass("scroll");
        $(".template-collection-backsplash").addClass("scroll");
        $(".template-collection-mural").addClass("scroll");
      } else {
        $(".Header").removeClass("scroll");
        $(".template-collection").removeClass("scroll");
        $(".template-collection-backsplash").removeClass("scroll");
        $(".template-collection-mural").removeClass("scroll");
      }
    });
  }

  if ($(window).width() < 1025) {
    //popupPreviewShow

    $(".productsList li > div > :nth-child(2)").click(function () {
      $(".popupPreview").addClass("active");
      $("body").css("overflow", "hidden");
    });

    //popupPreviewHide
    $(".popupPreviewHide").click(function () {
      $(".popupPreview").removeClass("active");
      $("body").css("overflow", "visible");
    });

    //listRoomsDisplay
    $(".listRooms >div").click(function () {
      if ($(".listRooms").hasClass("active")) {
        $(".listRooms").removeClass("active");
      } else {
        $(".listRooms").addClass("active");
      }
    });
  }

  //listRoomsChange
  $(".listRooms ul li").click(function () {
    $(".listRooms").removeClass("active");
    $(".listRooms ul li").removeClass("active");
    $(this).addClass("active");
  });

  //previewClickProduct
  $(".Products .productsList li > a").click(function () {
    $(this).parent().find("div").find("span").trigger("click");
  });
});
