document.addEventListener("DOMContentLoaded", function () {
  // ---- HERO VIDEO (responsive source) ----
  let heroVideo = document.querySelector(".vw-hero__video");
  if (heroVideo) {
    let mobileSrc =
      "https://cdn.shopify.com/videos/c/o/v/a02c78e0f14242b5ab5d12cbf4db6028.mp4";
    let desktopSrc =
      "https://cdn.shopify.com/videos/c/o/v/22d5ff147a144105af5e39b6fcd6ee80.mp4";
    let src = window.innerWidth < 750 ? mobileSrc : desktopSrc;

    let source = document.createElement("source");
    source.type = "video/mp4";
    source.src = src;
    heroVideo.appendChild(source);
    heroVideo.load();
    heroVideo.play().catch(function () {});
  }

  // ---- BEST-SELLERS RAIL ----
  if (document.getElementById("splideProducts")) {
    new Splide("#splideProducts", {
      type: "loop",
      perPage: 4,
      gap: "1rem",
      breakpoints: {
        1200: { perPage: 3 },
        900: { perPage: 2 },
        600: { perPage: 1.3, gap: "0.75rem" },
      },
      autoplay: true,
      interval: 6000,
      pauseOnHover: true,
      updateOnMove: true,
      pagination: false,
      arrows: true,
    }).mount();
  }

  // ---- DADA ART RAIL ----
  if (document.getElementById("splideDada")) {
    new Splide("#splideDada", {
      type: "loop",
      perPage: 4,
      gap: "1rem",
      breakpoints: {
        1200: { perPage: 3 },
        900: { perPage: 2 },
        600: { perPage: 1.3, gap: "0.75rem" },
      },
      autoplay: true,
      interval: 7000,
      pauseOnHover: true,
      pagination: false,
      arrows: true,
    }).mount();
  }

  // ---- HOW IT WORKS — play install video ----
  let btnInstall = document.getElementById("btnInstall");
  let videoInstall = document.getElementById("videoInstall");
  if (btnInstall && videoInstall) {
    btnInstall.addEventListener("click", function () {
      videoInstall.play();
      videoInstall.setAttribute("controls", "true");
      btnInstall.style.display = "none";
    });
    if (window.innerWidth >= 1025) {
      videoInstall.setAttribute("autoplay", "true");
      videoInstall.play().catch(function () {});
    }
  }
});
