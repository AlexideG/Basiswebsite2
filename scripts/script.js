//Chat gpt, prompt: Hoe kan je een animatie maken 
//dat de lijn onder de li in plaats van 
//instant verplaatst als je op een ander 
//klikt, maar dat hij schuift naar de andere?
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-container');
    
    if (scrollContainer) {
        const listItems = document.querySelectorAll('.horizontal-list li');
        const contentContainers = document.querySelectorAll('.overlay.image-text-container');
        
        const activeLine = document.createElement('div');
        activeLine.id = 'active-line';
        scrollContainer.appendChild(activeLine);

        function moveActiveLine(item) {
            const rect = item.getBoundingClientRect();
            const scrollContainerRect = scrollContainer.getBoundingClientRect();
            const scrollLeft = scrollContainer.scrollLeft;
            const leftPosition = rect.left - scrollContainerRect.left + scrollLeft;
            const width = rect.width * 0.6;

            activeLine.style.left = `${leftPosition + (rect.width - width) / 2}px`;
            activeLine.style.width = `${width}px`;
            activeLine.style.transition = 'left 0.3s ease, width 0.3s ease';
        }

        function showContent(contentId) {
            contentContainers.forEach(container => {
                container.style.display = 'none';
                if (container.id === contentId) {
                    container.style.display = 'flex';
                }
            });
        }

        const initialActiveItem = document.querySelector('.horizontal-list li.active');
        if (initialActiveItem) {
            moveActiveLine(initialActiveItem);
            showContent(initialActiveItem.getAttribute('data-content'));
        }

        listItems.forEach(item => {
            item.addEventListener('click', function() {
                listItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                moveActiveLine(this);
                const contentId = this.getAttribute('data-content');
                showContent(contentId);
            });
        });
    } else {
        console.log("Scroll-container niet aanwezig op deze pagina."); 
    }
    // tot hier

    // Hamburger menu functionaliteit
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const hamburgerImg = hamburgerIcon ? hamburgerIcon.querySelector('img') : null;
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const originalSrc = hamburgerImg ? hamburgerImg.src : '';
    const closeIconSrc = 'images/kruisje.png';

    if (hamburgerIcon && hamburgerMenu && hamburgerImg) {
        hamburgerIcon.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('show');

            if (hamburgerMenu.classList.contains('show')) {
                hamburgerImg.src = closeIconSrc;
                document.body.style.backgroundColor = 'white';
                hamburgerMenu.style.display = 'block';
            } else {
                hamburgerImg.src = originalSrc;
                document.body.style.backgroundColor = '';
                hamburgerMenu.style.display = 'none';
            }
        });
    }

    //chat gpt, prompt: kan jij toevoegen aan deze code, dat als je op het 3de plaatje klikt in de nav, er een hamburger menu 
    //opent met de volgende items: Store, Support, 
    //Bestelling, Aanmelden. de pagina moet helemaal wit zijn behalve die 
    //elementen en de nav moet ook blijven, en als je dan 
    //weer op het plaatje klikt dan sluit het hamburger menu zich weer.
    const details = document.getElementById('product-details');
    const icon = document.getElementById('toggle-icon');

    if (details) {
        if (icon) {
            details.addEventListener('toggle', function () {
                if (details.open) {
                    icon.src = 'images/min.png'; 
                } else {
                    icon.src = 'images/plus.png'; 
                }
            });
        } else {
            console.log("Toggle icon niet gevonden.");
        }
    } else {
        console.log("Product details niet gevonden.");
    }
// tot hier


// chat gpt, prompt: hoe kan ik een invul plek maken waar je bijvoorbeeld je email ik kan vullen?
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');

    if (emailForm && emailInput) {
        emailInput.addEventListener('input', function () {
            const emailValue = emailInput.value;

            if (emailValue === "") {
                emailInput.style.borderBottom = '0.1em solid #ccc';
                emailInput.style.color = 'black';
            } else if (emailValue.endsWith('@gmail.com')) {
                emailInput.style.borderBottom = '0.1em solid #4CAF50';
                emailInput.style.color = 'black';
            } else {
                emailInput.style.borderBottom = '0.1em solid red';
                emailInput.style.color = 'red';
            }
        });

        emailForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailValue = emailInput.value;

            if (emailValue === "") {
                emailInput.style.borderBottom = '0.1em solid #ccc';
                emailInput.style.color = 'black';
            } else if (emailValue.endsWith('@gmail.com')) {
                emailInput.style.borderBottom = '0.1em solid #4CAF50';
                emailInput.style.color = 'black';
            } else {
                emailInput.style.borderBottom = '0.1em solid red';
                emailInput.style.color = 'red';
            }
        });
    }
// tot hier

// hij moet elke keer als 
//je op die knop klikt een van 3 afbeeldingen laten zien, en 
//dan gewoon een random afbeelding kiezen, nu is het als ik erop 
//klik dat de afbeelding wel veranderd, alleen hij doet het maar 1 keer
    const imageElement = document.getElementById('dynamicImage');
    const changeImageButton = document.getElementById('changeImageBtn');

    if (changeImageButton && imageElement) {
        const images = [
            'images/verificatie1.png',
            'images/verificatie2.png',
            'images/verificatie3.png'
        ];

        let currentImageIndex = -1;

        changeImageButton.addEventListener('click', function () {
            let randomIndex;

            do {
                randomIndex = Math.floor(Math.random() * images.length);
            } while (randomIndex === currentImageIndex);

            currentImageIndex = randomIndex;

            changeImageButton.classList.add('rotate');

            setTimeout(() => {
                imageElement.src = images[currentImageIndex];
                changeImageButton.classList.remove('rotate');
            }, 600);
        });
    }
});
//tot hier
