window.addEventListener('load', () => {

    function sliderLinhasProjetores() {
        var sliderLinhasProjetores = document.querySelectorAll('.h-linhas__splide');
    
        for(var i=0; i<sliderLinhasProjetores.length; i++){
            var splideElement = sliderLinhasProjetores[i];
            //3.1 if no options are defined by 'data-splide' attribute: take these default options
            var splideDefaultOptions = 
            {
                type: 'loop',
                drag: false,
                pagination: false,
                breakpoints: {
                    992: {
                        drag: true,
                        pagination: true,
                        arrows: false,
                        gap: 10
                    }
                }
            }
            
            var splide = new Splide( splideElement, splideDefaultOptions ); 
        
            splide.mount();
        }
    }
    // Splide Carrossel
    var main = new Splide( '#main-slider', {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : true,
    } );
  
  
    var thumbnails = new Splide( '#thumbnail-slider', {
        type        : "slide",
      perPage: 2,
      focus: 1,
      fixedWidth  : 100,
      fixedHeight : 60,
      gap         : 10,
      rewind      : true,
      pagination  : false,
      cover       : true,
      isNavigation: true,
      breakpoints : {
        600: {
          fixedWidth : 60,
          fixedHeight: 44,
        },
      },
    } );
  
  
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
    
////////////

    function sliderProdSlides() {
        var sliderProdSlides = document.querySelectorAll('.sliderprod__splide');
        
        for(var i=0; i<sliderProdSlides.length; i++){
            var splideElement = sliderProdSlides[i];
            //3.1 if no options are defined by 'data-splide' attribute: take these default options
            var splideDefaultOptions = 
            {
                type: 'fade',
                rewind: true,
                speed: 1000,
                autoplay: 'true',
                interval: 1500,
                pauseOnHover : true,
                pauseOnFocus : false,
                resetProgress: true,
                pagination: false,
                arrows: false,
                padding: '2rem'
            }
            
            var sliderImgProjetor = new Splide( splideElement, splideDefaultOptions ); 
        
            sliderImgProjetor.mount();
        }  
    }

    sliderLinhasProjetores()
    sliderProdSlides()
});
