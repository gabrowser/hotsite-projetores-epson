window.addEventListener('load', () => {
    function linhasNavigation(elemento01ID, elemento02ID, slider01ID, slider02ID) {
        let elemento01 = document.getElementById(elemento01ID);
        let elemento02 = document.getElementById(elemento02ID);
        let slider01 = document.getElementById(slider01ID)
        let slider02 = document.getElementById(slider02ID)

        elemento01.addEventListener("click", () => {
            elemento02.classList.remove("active")
            elemento01.classList.add("active")
            slider01.classList.remove("d-none")
            slider01.classList.add("d-block")
            slider02.classList.remove("d-block")
            slider02.classList.add("d-none")
        })
    }

    linhasNavigation('linhaCasa', 'linhaEducacao', 'sliderLinhasProjetores_01', 'sliderLinhasProjetores_02')
    linhasNavigation('linhaEducacao', 'linhaCasa', 'sliderLinhasProjetores_02', 'sliderLinhasProjetores_01')

    linhasNavigation('linhaCasaMob', 'linhaEducacaoMob', 'sliderLinhasProjetores_01', 'sliderLinhasProjetores_02')
    linhasNavigation('linhaEducacaoMob', 'linhaCasaMob', 'sliderLinhasProjetores_02', 'sliderLinhasProjetores_01')

    function linhasNavigationMobDropdown() {
        const dropdownHeader = document.querySelector('.dropdown-header');
        const dropdown = document.querySelector('.dropdown-body')
        const arrow = document.querySelector('.icon-arrow')
        const items = document.querySelectorAll('.dropdown-item')
        let clickedItem = null;
        
        if (dropdownHeader) { 
            dropdownHeader.addEventListener('click', () => {
            if (dropdown.classList.contains('open')) {
                arrow.classList.remove('open')
                dropdown.classList.remove('open')
            } else {
                arrow.classList.add('open')
                dropdown.classList.add('open')
            }
            })
        }
        
        if (items) {
            items.forEach(item => {
            
            item.addEventListener('click', () => {
                // All DOM manipulation has to happen in event listeners to upate the UI
                const previouslySelectedItem = document.querySelector('.selected');
                if (previouslySelectedItem) {
                previouslySelectedItem.classList.remove('selected');
                }
        
                // Update 'state'
                clickedItem = item
                // Targeting DOM elements is more trivial
                // We wouldn't need to specifically target this in React and could just use jsx templating
                dropdownHeader.querySelector('span').innerText = clickedItem.dataset.label
            })
            })
        }
    }

    linhasNavigationMobDropdown()
})