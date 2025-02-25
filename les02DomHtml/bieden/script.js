let hoogsteBod = 0;
let hoogsteBieder = "niemand";

function plaatsBod() {
    const naamInput = document.getElementById('naam');
    const bodInput = document.getElementById('bod');
    const melding = document.getElementById('melding');

    const naam = naamInput.value.trim();
    const bod = parseFloat(bodInput.value);

    if (!naam || isNaN(bod) || bod <= hoogsteBod) {
        melding.innerText = "Voer een geldig bod!";
        return;
    }

    // Update de hoogste bieder en bod
    hoogsteBod = bod;
    hoogsteBieder = naam;

    document.getElementById('hoogsteBod').innerText = hoogsteBod;
    document.getElementById('hoogsteBieder').innerText = hoogsteBieder;

    // Velden leegmaken
    naamInput.value = '';
    bodInput.value = '';
}
