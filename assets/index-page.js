document.addEventListener("DOMContentLoaded", function () {
  // VideoPresentationMedia
  let mainVideo = $(".template-index .Presentation video");
  let mobileSrc =
    "https://cdn.shopify.com/videos/c/o/v/a02c78e0f14242b5ab5d12cbf4db6028.mp4";
  let desktopSrc =
    "https://cdn.shopify.com/videos/c/o/v/22d5ff147a144105af5e39b6fcd6ee80.mp4";

  if ($(window).width() < 750) {
    mainVideo.append("<source type='video/mp4' src='" + mobileSrc + "' />");
  } else {
    mainVideo.append("<source type='video/mp4' src='" + desktopSrc + "' />");
  }

  // SlideProducts
  let splideProducts = new Splide("#splideProducts", {
    type: "loop",
    perPage: 3,
    breakpoints: {
      1025: { perPage: 2 },
    },
    focus: "center",
    autoplay: true,
    interval: 8000,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    padding: "1%",
    throttle: 300,
  }).mount();

  // SlideProductsBackground
  let loadFirstBackground = (function () {
    let newColor = $(".template-index .SlideProducts ul :nth-child(1)").data(
      "color"
    );
    $(".template-index .SlideProducts").css("background-color", newColor);
  })();

  splideProducts.on("move", function () {
    let newColor = $(".template-index .SlideProducts ul li.is-active").data(
      "color"
    );
    $(".template-index .SlideProducts").css("background-color", newColor);
  });

  // SlideCollections
  let splideCollections = new Splide("#splideCollections", {
    type: "loop",
    perPage: 4,
    breakpoints: {
      1400: { perPage: 3 },
      1025: { perPage: 1 },
    },
    focus: "center",
    autoplay: true,
    interval: 8000,
    updateOnMove: true,
    pagination: false,
    padding: "0",
  }).mount();

  // SlideRealisations
  let splideRealisations = new Splide("#splideRealisations", {
    type: "loop",
    perPage: 3,
    breakpoints: {
      1025: { perPage: 1 },
    },
    focus: "center",
    autoplay: true,
    interval: 8000,
    updateOnMove: true,
    pagination: false,
    padding: "0",
  }).mount();

  // SlideDada
  let splideDada = new Splide("#splideDada", {
    type: "loop",
    perPage: 5,
    breakpoints: {
      1025: { perPage: 2 },
    },
    focus: "center",
    autoplay: true,
    interval: 8000,
    updateOnMove: true,
    pagination: false,
    padding: "0",
  }).mount();
  
  // InstallPlay
  if ($(window).width() < 1025) {
    let btnInstall = document.getElementById("btnInstall");
    let videoInstall = document.getElementById("videoInstall");

    btnInstall.addEventListener("click", function () {
      videoInstall.play();
      videoInstall.setAttribute("controls", "true");
      document.querySelector(
        ".template-index .Install #btnInstall"
      ).style.display = "none";
      document.querySelector(
        ".template-index .Install .btnInstall"
      ).style.display = "none";
      document.querySelector(".template-index .Install h2").style.display =
        "none";
    });
  } else {
    videoInstall.setAttribute("autoplay", "true");
  }
});

const object = document.getElementById("couches2");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  object.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
