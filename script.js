// Get the button and images container
const showWishesButton = document.getElementById('showWishesButton');
const imagesContainer = document.getElementById('imagesContainer');

// Add a click event listener to the button
showWishesButton.addEventListener('click', function() {
    // Toggle the 'hidden' class to show/hide images
    imagesContainer.classList.toggle('hidden');
});
