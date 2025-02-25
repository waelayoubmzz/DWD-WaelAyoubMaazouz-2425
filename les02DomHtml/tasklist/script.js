document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("frmTask"); // Formulier voor nieuwe taken
    const taskList = document.getElementById("tasks"); // Container voor takenlijst

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Voorkomt herladen van de pagina

        const priority = document.getElementById("selPriority").value; // Prioriteit van de taak
        const deadline = document.getElementById("datDeadline").value; // Deadline van de taak
        const taskText = document.getElementById("txtTask").value.trim(); // Tekst van de taak

        if (!taskText) return; // Stop als er geen tekst is ingevoerd

        // Controleer of er een deadline is en voeg deze toe als dat het geval is
        const deadlineText = deadline ? `<span class="deadline">(deadline: ${deadline})</span>` : "";

        // prioriteit bepalen ecetera
        const taskHTML = `
            <div class="task">
                <span class="priority priority--${priority} material-icons">assignment</span>
                <p class="tasktext">${taskText} ${deadlineText}</p>
                <span class="complete material-icons">more_horiz</span> <!-- Terug naar originele drie puntjes -->
            </div>
        `;

        taskList.innerHTML += taskHTML; // Voeg de taak toe aan de lijst
        form.reset(); // Reset het formulier na toevoegen
    });

    taskList.addEventListener("click", function (event) {
        // Controleer of er op het vinkje is geklikt
        if (event.target.classList.contains("complete")) {
            event.target.classList.toggle("done"); 
            event.target.closest(".task").classList.toggle("complete"); 
        }
    });
});
