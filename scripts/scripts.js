window.addEventListener('load', () => {
    function linhasNavigation() {
        let linhaCasa = document.querySelector("#linhaCasa");
        let linhaEducacao = document.querySelector("#linhaEducacao");
        let sliderLinhasProjetores01 = document.querySelector("#sliderLinhasProjetores_01")
        let sliderLinhasProjetores02 = document.querySelector("#sliderLinhasProjetores_02")

        linhaCasa.addEventListener("click", () => {
            linhaEducacao.classList.remove("active")
            linhaCasa.classList.add("active")
            sliderLinhasProjetores01.classList.remove("d-none")
            sliderLinhasProjetores01.classList.add("d-block")
            sliderLinhasProjetores02.classList.remove("d-block")
            sliderLinhasProjetores02.classList.add("d-none")
        })
        linhaEducacao.addEventListener("click", () => {
            linhaCasa.classList.remove("active")
            linhaEducacao.classList.add("active")

            sliderLinhasProjetores02.classList.remove("d-none")
            sliderLinhasProjetores02.classList.add("d-block")
            sliderLinhasProjetores01.classList.remove("d-block")
            sliderLinhasProjetores01.classList.add("d-none")
        })
    }

    linhasNavigation()
})