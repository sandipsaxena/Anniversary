document.addEventListener('DOMContentLoaded', function() {
    const factButton = document.getElementById('fact-button');
    const factDisplay = document.getElementById('fact-display');
    const imagesContainer = document.getElementById('imagesContainer');

    // Add an event listener for button click
    factButton.addEventListener('click', function() {
        console.log("Button clicked");

        // Toggle the visibility of the images container
        imagesContainer.classList.toggle('hidden');

        // Toggle the text of the fact display
        if (imagesContainer.classList.contains('hidden')) {
            factDisplay.textContent = "Click the button to see anniversary images!";
        } else {
            factDisplay.textContent = "Here are the anniversary images!";
        }
    });
});
