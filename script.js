document.addEventListener("DOMContentLoaded", function() {
    const lettersList = document.getElementById("letters-list");
    const letterForm = document.getElementById("letter-form");

    // Load existing letters from local storage
    const letters = JSON.parse(localStorage.getItem("letters")) || [];

    function displayLetters() {
        lettersList.innerHTML = "";
        letters.forEach(letter => {
            const letterDiv = document.createElement("div");
            letterDiv.classList.add("letter");

            const letterName = document.createElement("h3");
            letterName.textContent = letter.name;
            letterDiv.appendChild(letterName);

            const letterMessage = document.createElement("p");
            letterMessage.textContent = letter.message;
            letterDiv.appendChild(letterMessage);

            lettersList.appendChild(letterDiv);
        });
    }

    letterForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        const newLetter = {
            name,
            message
        };

        letters.push(newLetter);
        localStorage.setItem("letters", JSON.stringify(letters));
        displayLetters();

        letterForm.reset();
    });

    // Display letters on initial load
    displayLetters();
});
