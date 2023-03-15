window.addEventListener('load', () => {
    // new Splide('#sliderLinhasProjetores', {
    //     type: 'loop',
    //     drag: false,
    //     pagination: false,
    //     breakpoints: {
    //         576: {
    //             drag: true
    //         }
    //     }
    // }).mount();

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
                    576: {
                        drag: true
                    }
                }
            }
            
            var splide = new Splide( splideElement, splideDefaultOptions ); 
        
            splide.mount();
        }
    }


// new Splide('#sliderImgProjetor', {
//         type: 'fade',
//         rewind: true,
//         speed: 1000,
//         autoplay: 'true',
//         interval: 1500,
//         pauseOnHover : false,
//         pauseOnFocus : false,
//         resetProgress: true,
//         pagination: false,
//         arrows: false,
//         padding: '2rem'
//     }).mount();

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
                pauseOnHover : false,
                pauseOnFocus : false,
                resetProgress: true,
                pagination: false,
                arrows: false,
                padding: '2rem'
            }
            
            var splide = new Splide( splideElement, splideDefaultOptions ); 
        
            splide.mount();
        }

        
    }

    sliderLinhasProjetores()
    sliderProdSlides()
});