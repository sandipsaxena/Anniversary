// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the button and images container by their IDs
    const showWishesButton = document.getElementById('showWishesButton');
    const imagesContainer = document.getElementById('imagesContainer');

    // Add a click event listener to the button
    showWishesButton.addEventListener('click', function() {
        // Toggle the 'hidden' class on the images container
        imagesContainer.classList.toggle('hidden');
    });
});
