document.addEventListener('DOMContentLoaded', function () {
    // Form checking
    const form = document.getElementById('frmOrder');
    const emailInput = document.getElementById('inpEmail');
    const sizeSelect = document.getElementById('selMeasure');
    const emailMessage = document.getElementById('msgEmail');
    const sizeMessage = document.getElementById('msgMeasure');
    const lblMessage = document.getElementById('lblMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Voorkom herladen van de pagina

        let valid = true;

        if (emailInput.value.trim() === '') {
            emailMessage.textContent = 'Email mag niet leeg zijn';
            valid = false;
        } else {
            emailMessage.textContent = '';
        }

        if (sizeSelect.value === '') {
            sizeMessage.textContent = 'Selecteer je maat';
            valid = false;
        } else {
            sizeMessage.textContent = '';
        }

        if (valid) {
            updateOrderSummary(); // Update bestellingsoverzicht als alles geldig is
        }
    });

    // Afbeeldingen veranderen bij modelkeuzes
    const modelLinks = document.querySelectorAll('#model a');
    const shoeImage = document.querySelector('#figShoe img');
    const shoeCaption = document.querySelector('#figShoe figcaption span');

    modelLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            shoeImage.src = this.href;
            shoeCaption.textContent = this.textContent;

            modelLinks.forEach(link => link.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Bestellingsoverzicht tonen
    function updateOrderSummary() {
        const selectedModelElement = document.querySelector('#model a.selected');
        const selectedSize = sizeSelect.value;
        let totalPrice = 54.99;

        // Controleer of een model is geselecteerd
        const selectedModel = selectedModelElement ? selectedModelElement.textContent : 'Geen model geselecteerd';

        // Verzamel de geselecteerde accessoires en bereken de totale prijs
        let accessories = [];
        document.querySelectorAll('#accessoires input[type=checkbox]:checked').forEach(checkbox => {
            accessories.push(checkbox.parentElement.textContent.trim()); // Gebruik parent-element tekst
            totalPrice += parseFloat(checkbox.value);
        });

        // Maak een nette tekstweergave van de accessoires
        const accessoriesText = accessories.length > 0 ? accessories.join(', ') : 'Geen accessoires';

        // Toon het overzichtsbericht (blijft staan tot nieuwe bestelling)
        lblMessage.textContent = `Je keuze: ${selectedModel}, maat ${selectedSize}, accessoires: ${accessoriesText} (Totaalprijs: € ${totalPrice.toFixed(2)})`;
    }
});
