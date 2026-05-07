document.addEventListener("DOMContentLoaded", function () {
  // // scrollTop
  // $(window).scroll(function () {
  //     if ($(this).scrollTop() >= 3) {
  //         $(".Header").addClass('scroll');
  //     }
  //     else {
  //         $(".Header").removeClass('scroll');
  //     }
  // });

  // menuHamburger
  if ($(window).width() < 1025) {
    $(".Header .menu-toggle").click(function () {
      $(this).toggleClass("opened");
      $(".Header .menuListHeader").toggleClass("opened");
    });

    $(".Header .menuHamburger .menuListHeader > ul > li:not(.menu-item)").click(
      function () {
        setTimeout(function () {
          $(".Header .menu-toggle").removeClass("opened");
          $(".Header .menuListHeader").removeClass("opened");
        }, 1000);
      }
    );
  }

  //SearchDesktopHover
  $(".searchHeaderDesktop button").click(function (e) {
    if ($(".searchHeaderDesktop").hasClass("active")) {
    } else {
      e.preventDefault();
      $(".searchHeaderDesktop").addClass("active");
    }
  });

  // SubMenu
  function subMenuDisplay() {
    if ($(this).hasClass("open")) {
      $(".sub-menu").stop(true, true).slideUp();
      $(".menu-item").removeClass("open");
    } else {
      $(".sub-menu").stop(true, true).slideUp();
      $(".menu-item").removeClass("open");
      $(this).children(".sub-menu").slideDown();
      $(this).addClass("open");
    }
  }
  if ($(window).width() > 1025) {
    $(".menu-item").hover(
      function () {
        var $submenu = $(this).children(".sub-menu");

        // Annule le délai de fermeture si la souris revient sur l'élément
        if ($submenu.data("timeoutId")) {
          clearTimeout($submenu.data("timeoutId"));
        }

        $submenu.stop(true, true).slideDown();
        $(this).addClass("open");
      },
      function () {
        var $submenu = $(this).children(".sub-menu");

        // Définit un délai avant de fermer le sous-menu
        var timeoutId = setTimeout(function () {
          $submenu.slideUp();
          $submenu.parent().removeClass("open");
        }, 200); // Délai avant de fermer le sous-menu, ajustez au besoin

        // Stocke l'identifiant du délai pour pouvoir l'annuler plus tard
        $submenu.data("timeoutId", timeoutId);
      }
    );
  } else {
    $(".menu-item").click(subMenuDisplay); // Gère l'événement de clic
  }
});
