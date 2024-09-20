document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.horizontal-list li');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Verwijder de 'active' klasse van alle lijstitems
            listItems.forEach(i => i.classList.remove('active'));
            
            // Voeg de 'active' klasse toe aan het aangeklikte item
            this.classList.add('active');
        });
    });
});


//Chat gpt, prompt: Hoe kan je een animatie maken 
//dat de lijn onder de li in plaats van 
//instant verplaatst als je op een ander 
//klikt, maar dat hij schuift naar de andere?
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.horizontal-list li');

    // Lijn aanmaken die onder het actieve item komt
    const activeLine = document.createElement('div');
    activeLine.id = 'active-line';
    document.querySelector('.scroll-container').appendChild(activeLine);

    function moveActiveLine(item) {
        const rect = item.getBoundingClientRect();
        const scrollContainerRect = document.querySelector('.scroll-container').getBoundingClientRect();
        const scrollLeft = document.querySelector('.scroll-container').scrollLeft;
        const leftPosition = rect.left - scrollContainerRect.left + scrollLeft; // Corrigeer voor scrollen
        const width = rect.width * 0.6; // Breedte van de lijn, 80% van de volledige breedte
        
        activeLine.style.left = `${leftPosition + (rect.width - width) / 2}px`; // Center de lijn
        activeLine.style.width = `${width}px`; // Korter maken
    }

    // Initieer de lijn op het eerste actieve item
    const initialActiveItem = document.querySelector('.horizontal-list li.active');
    if (initialActiveItem) {
        moveActiveLine(initialActiveItem);
    }

    // Voeg event listeners toe aan elk lijstitem
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Verwijder de 'active' klasse van alle items
            listItems.forEach(i => i.classList.remove('active'));
            
            // Voeg de 'active' klasse toe aan het aangeklikte item
            this.classList.add('active');
            
            // Beweeg de lijn naar het nieuwe actieve item
            moveActiveLine(this);
        });
    });
});

//Tot hier