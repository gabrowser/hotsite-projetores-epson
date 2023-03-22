window.addEventListener('load', () => {
    function sliderGaleria() {
        // Splide Carrossel
        var splide = new Splide( '#main-slider', {
            type      : 'fade',
            rewind    : true,
            pagination: false,
            arrows    : true,
            breakpoints: {
            600: {
                arrows: false
            }
            }
        } );

        var thumbnails = document.getElementsByClassName( 'thumbnail' );
        var current;

        for ( var i = 0; i < thumbnails.length; i++ ) {
        initThumbnail( thumbnails[ i ], i );
        }

        function initThumbnail( thumbnail, index ) {
        thumbnail.addEventListener( 'click', function () {
            splide.go( index );
        } );
        }

        splide.on( 'mounted move', function () {
        var thumbnail = thumbnails[ splide.index ];

        if ( thumbnail ) {
            if ( current ) {
            current.classList.remove( 'is-active' );
            }

            thumbnail.classList.add( 'is-active' );
            current = thumbnail;
        }
        } );

        splide.mount();
    }

    function sliderLinhasProjetores() {
        var sliderLinhasProjetores = document.querySelectorAll('.h-linhas__splide');
    
        for(var i=0; i<sliderLinhasProjetores.length; i++){
            var splideElement = sliderLinhasProjetores[i];

            var splideDefaultOptions = 
            {
                type: 'loop',
                drag: false,
                pagination: true,
                breakpoints: {
                    992: {
                        drag: true,
                        arrows: false,
                        gap: 10
                    }
                }
            }
            
            var splide = new Splide( splideElement, splideDefaultOptions ); 
        
            splide.mount();
        }
    }

    sliderGaleria()
    sliderLinhasProjetores() 

})