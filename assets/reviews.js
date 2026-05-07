document.addEventListener('DOMContentLoaded', function () {
  
  //trustSlide
   let splideTrust = new Splide('#splideTrust', {
        type: 'loop',
        perPage: 3,
        breakpoints: {
            1025: { perPage: 2 },
            600: { perPage: 1 }
        },
        focus: 'left',
        autoplay: true,
        interval: 4000,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: false,
        padding: '0',
    }).mount();
  
});