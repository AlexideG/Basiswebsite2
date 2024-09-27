document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.horizontal-list li');

    listItems.forEach(item => { // Loop door elk lijstitem
        item.addEventListener('click', function() { // Voeg een klik-event toe aan elk item
            listItems.forEach(i => i.classList.remove('active')); // Verwijder 'active' klasse van alle items
            this.classList.add('active'); // Voeg 'active' klasse toe aan het aangeklikte item
        });
    });
})

//Chat gpt, prompt: Hoe kan je een animatie maken 
//dat de lijn onder de li in plaats van 
//instant verplaatst als je op een ander 
//klikt, maar dat hij schuift naar de andere?


// hoe kan ik zorgen dat als je op de li laptop klikt, je nog steeds zo een wit vierkant ziet maar dan dat hij iets anders weergeeft?
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.horizontal-list li'); // Selecteer lijstitems
    const contentContainers = document.querySelectorAll('.overlay.image-text-container'); // Selecteer inhoudcontainers

    // Lijn aanmaken die onder het actieve item komt
    const activeLine = document.createElement('div'); // Maak een nieuwe div voor de actieve lijn
    activeLine.id = 'active-line'; // Geef de div een ID
    document.querySelector('.scroll-container').appendChild(activeLine); // Voeg de lijn toe aan de scroll-container

    function moveActiveLine(item) { // Functie om de lijn te verplaatsen
        const rect = item.getBoundingClientRect(); // Krijg de positie van het item
        const scrollContainerRect = document.querySelector('.scroll-container').getBoundingClientRect(); // Krijg de positie van de scroll-container
        const scrollLeft = document.querySelector('.scroll-container').scrollLeft; // Krijg de scroll positie
        const leftPosition = rect.left - scrollContainerRect.left + scrollLeft; // Bereken de linkse positie van de lijn
        const width = rect.width * 0.6; // Bepaal de breedte van de lijn

        activeLine.style.left = `${leftPosition + (rect.width - width) / 2}px`; // Stel de linkse positie van de lijn in
        activeLine.style.width = `${width}px`; // Stel de breedte van de lijn in
    }

    function showContent(contentId) { // Functie om de inhoud te tonen
        contentContainers.forEach(container => { // Loop door elke container
            container.style.display = 'none'; // Verberg de container
            if (container.id === contentId) { // Als de ID van de container overeenkomt
                container.style.display = 'flex'; // Toon de container
            }
        });
    }

    const initialActiveItem = document.querySelector('.horizontal-list li.active'); // Zoek het initiële actieve item
    if (initialActiveItem) { // Als er een actief item is
        moveActiveLine(initialActiveItem); // Verplaats de lijn naar het actieve item
        showContent(initialActiveItem.getAttribute('data-content')); // Toon de bijbehorende inhoud
    }

    listItems.forEach(item => { // Loop door elk lijstitem opnieuw
        item.addEventListener('click', function() { // Voeg een klik-event toe
            listItems.forEach(i => i.classList.remove('active')); // Verwijder 'active' klasse van alle items
            this.classList.add('active'); // Voeg 'active' klasse toe aan het aangeklikte item

            moveActiveLine(this); // Verplaats de lijn naar het aangeklikte item

            const contentId = this.getAttribute('data-content'); // Haal de content ID van het aangeklikte item
            showContent(contentId); // Toon de bijbehorende inhoud
        });
    });
});
//Tot hier
//Tot hier

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon'); // Selecteer het hamburger icoon
    const hamburgerMenu = document.getElementById('hamburger-menu'); // Selecteer het menu

    // Voeg klik event toe aan het hamburger icoon
    hamburgerIcon.addEventListener('click', function() {
        // Toggle de show class op het menu
        hamburgerMenu.classList.toggle('show');
    });
});
