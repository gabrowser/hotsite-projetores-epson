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
            
            var sliderImgProjetor = new Splide( splideElement, splideDefaultOptions ); 
        
            sliderImgProjetor.mount();

            // ESSA PARTE DO PLAY PAUSE TÁ DANDO COISA

            // var SlideButtonPause = document.querySelectorAll('.splide__play-pause');

            // SlideButtonPause.forEach((button) => {
            //     if (button) {
            //         var pausedClass = 'is-paused';
    
            //         Remove the paused class and change the label to "Pause".
            //         sliderImgProjetor.on('autoplay:play', function () {
            //         button.classList.remove(pausedClass);
            //         button.innerHTML = '<svg class="me-2" width="30px" height="30px"><path fill-rule="evenodd"  fill="rgb(213, 225, 246)"d="M13.1000,27.707 C6.429,27.707 0.293,21.570 0.293,13.999 C0.293,6.429 6.429,0.292 13.1000,0.292 C21.570,0.292 27.707,6.429 27.707,13.999 C27.707,21.570 21.570,27.707 13.1000,27.707 ZM11.000,8.000 L9.000,8.000 L9.000,20.000 L11.000,20.000 L11.000,8.000 ZM18.000,8.000 L15.1000,8.000 L15.1000,20.000 L18.000,20.000 L18.000,8.000 Z"/></svg><span class="mt-1">Pausar</span>';
            //         button.setAttribute('aria-label', 'Pause Autoplay');
            //         });
    
            //         Add the paused class and change the label to "Play".
            //         sliderImgProjetor.on('autoplay:pause', function () {
            //         button.classList.add(pausedClass);
            //         button.innerHTML = '<svg class="me-2" width="28px" height="28px"><path fill-rule="evenodd"  fill="rgb(213, 225, 246)"d="M13.1000,27.707 C6.429,27.707 0.293,21.570 0.293,13.999 C0.293,6.429 6.429,0.292 13.1000,0.292 C21.570,0.292 27.707,6.429 27.707,13.999 C27.707,21.570 21.570,27.707 13.1000,27.707 ZM11.000,7.000 L11.000,21.000 L19.1000,14.000 L11.000,7.000 Z"/></svg><span class="mt-1">Reproduzir</span>';
            //         button.setAttribute('aria-label', 'Start Autoplay');
            //         });
    
            //         Toggle play/pause when the button is clicked.
            //         sliderImgProjetor.on('click', function () {
            //             var flag     = 99;
            //             var Autoplay = sliderImgProjetor.Components.Autoplay;
    
            //             if (button.classList.contains(pausedClass)) {
            //                 Autoplay.play(flag);
            //             } else {
            //                 Autoplay.pause(flag);
            //             }
            //         });
            //     }
            // })
        }  
    }

    sliderLinhasProjetores()
    sliderProdSlides()
});