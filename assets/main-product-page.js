document.addEventListener("DOMContentLoaded", function () {
  // InstallPlay
  let videoInstall = document.getElementById("videoInstall");
  let btnInstallSpan = document.querySelector(
    ".template-product .Install .btnInstall"
  );

  if (videoInstall && btnInstallSpan) {
    let playInstall = function () {
      videoInstall.play().catch(function () {});
      videoInstall.setAttribute("controls", "true");
      btnInstallSpan.style.display = "none";
    };

    btnInstallSpan.addEventListener("click", playInstall);

    // Autoplay (muted) on desktop — give the user native controls and
    // hide the redundant custom play button so it can't look broken.
    if (window.innerWidth >= 1025) {
      videoInstall.setAttribute("autoplay", "true");
      videoInstall.setAttribute("controls", "true");
      videoInstall.muted = true;
      videoInstall.play().catch(function () {});
      btnInstallSpan.style.display = "none";
    }
  }

  // calculQuantity
  // Surface-based: a lot of 8x(20x20) covers 0.32 m², a lot of 4x(40x40)
  // covers 0.64 m² (twice as much). Using surface keeps the two formats
  // consistent with reality — a wall that needs 1 lot of 40x40 should not
  // need 2 lots of 20x20.
  let calculD = 0;
  let calculF = 0;
  let LOT_20_M2 = 8 * 0.04; // 0.32 m²
  let LOT_40_M2 = 4 * 0.16; // 0.64 m²
  $(".inputsCalculQuantity input").change(function () {
    let largeurCm = parseFloat($("#inputA").val()) || 0;
    let longueurCm = parseFloat($("#inputB").val()) || 0;
    let surfaceM2 = (largeurCm * longueurCm) / 10000;
    calculD = surfaceM2 > 0 ? Math.ceil(surfaceM2 / LOT_20_M2) : 0;
    calculF = surfaceM2 > 0 ? Math.ceil(surfaceM2 / LOT_40_M2) : 0;
    $("#inputC").val(calculD);
    $("#inputD").val(calculF);
  });

  //buttonCalculCheckout
  $(".template-product #btnCheckoutCalcul2020").click(function () {
    $(".template-product #quantityCheckout").val(calculD);
    displayPrice();
    $("#btnCheckout").trigger("click");
  });
  $(".template-product #btnCheckoutCalcul4040").click(function () {
    $(".template-product #quantityCheckout").val(calculF);
    displayPrice();
    $("#btnCheckout").trigger("click");
  });

  // changeQuantityCheckout
  $(".template-product #quantityCheckoutDisplay").change(function () {
    if ($(this).val() < 1) {
      $(this).val("1");
    } else if ($(this).val() > 999) {
      $(this).val("999");
    }
    displayPrice();
  });

  $(".template-product #upQuantity").click(function () {
    let valQuantity = $("#quantityCheckoutDisplay").val();
    if (valQuantity < 999) {
      $("#quantityCheckoutDisplay").val(++valQuantity);
      displayPrice();
    }
  });
  $(".template-product #downQuantity").click(function () {
    let valQuantity = $("#quantityCheckoutDisplay").val();
    if (valQuantity > 1) {
      $("#quantityCheckoutDisplay").val(--valQuantity);
      displayPrice();
    }
  });

  // slideImage
  $(".template-product .productImage .arrows #productImagePrev").click(
    function () {
      let prevSlide = $(
        ".template-product .productImage .pagination ul li.active"
      ).prev();
      let prevSlideId = $(
        ".template-product .productImage .pagination ul li.active"
      )
        .prev()
        .attr("id");
      if (
        $(
          ".template-product .productImage .pagination ul li:first-child.active"
        ).hasClass("active")
      ) {
      } else {
        $(".template-product .productImage").attr("class", "productImage");
        $(".template-product .productImage .pagination ul li").removeClass(
          "active"
        );
        $(".template-product .productImage .slide").removeClass("active");
        $("." + prevSlideId).addClass("active");
        $(prevSlide).addClass("active");
      }
    }
  );

  $(".template-product .productImage .arrows #productImageNext").click(
    function () {
      let nextSlide = $(
        ".template-product .productImage .pagination ul li.active"
      ).next();
      let nextSlideId = $(
        ".template-product .productImage .pagination ul li.active"
      )
        .next()
        .attr("id");
      if (
        $(
          ".template-product .productImage .pagination ul li:last-child.active"
        ).hasClass("active")
      ) {
      } else {
        $(".template-product .productImage .pagination ul li").removeClass(
          "active"
        );
        $(".template-product .productImage .slide").removeClass("active");
        $("." + nextSlideId).addClass("active");
        $(nextSlide).addClass("active");
      }
    }
  );

  $(".template-product .productImage .pagination ul li").click(function () {
    $(".template-product .productImage .pagination ul li").removeClass(
      "active"
    );
    $(".template-product .productImage .slide").removeClass("active");
    $("." + this.id).addClass("active");
    $(this).addClass("active");
  });

  function loadPiece() {
    let kitchenArray = ["cuisine", "kitchen"];
    let wallArray = ["mur", "wall"];
    let bathroomArray = ["sdb", "bathroom"];
    let showerArray = ["douche", "shower"];
    let floorArray = ["sol", "floor"];
    let furnitureArray = ["meuble", "furniture"];

    let camping_car_salon = ["camping_car_salon"];
    let camping_car_chambre = ["camping_car_chambre"];
    let camping_car_sdb = ["camping_car_sdb"];

    let mobilhome_salon = ["mobilhome_salon"];
    let mobilhome_chambre = ["mobilhome_chambre"];
    let mobilhome_sdb = ["mobilhome_sdb"];

    let urlPiece = location.href.substring(location.href.indexOf("+") + 1);
    let selectedPiece;
    if (window.location.href.indexOf("+") > -1) {
      if ($.inArray(urlPiece, kitchenArray) > -1) {
        selectedPiece = "slide1";
      }
      if ($.inArray(urlPiece, showerArray) > -1) {
        selectedPiece = "slide3";
      }

      if ($.inArray(urlPiece, furnitureArray) > -1) {
        selectedPiece = "slide4";
      }

      if ($.inArray(urlPiece, bathroomArray) > -1) {
        selectedPiece = "slide5";
      }

      if ($.inArray(urlPiece, wallArray) > -1) {
        selectedPiece = "slide6";
      }
      if ($.inArray(urlPiece, floorArray) > -1) {
        selectedPiece = "slide7";
      }
      if ($.inArray(urlPiece, camping_car_salon) > -1) {
        selectedPiece = "slidecc1";
      }
      if ($.inArray(urlPiece, camping_car_chambre) > -1) {
        selectedPiece = "slidecc2";
      }
      if ($.inArray(urlPiece, camping_car_sdb) > -1) {
        selectedPiece = "slidecc3";
      }
      if ($.inArray(urlPiece, mobilhome_salon) > -1) {
        selectedPiece = "slidembl1";
      }
      if ($.inArray(urlPiece, mobilhome_chambre) > -1) {
        selectedPiece = "slidembl2";
      }
      if ($.inArray(urlPiece, mobilhome_sdb) > -1) {
        selectedPiece = "slidembl3";
      }

      $(".template-product .productImage .pagination ul li").removeClass(
        "active"
      );
      $(".template-product .productImage .slide").removeClass("active");
      $("." + selectedPiece).addClass("active");
      $("#" + selectedPiece).addClass("active");
    }
  }

  loadPiece();
});
