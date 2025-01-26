document.getElementById('showWishesButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent any default action
    const imagesContainer = document.getElementById('imagesContainer');
    imagesContainer.classList.toggle('hidden');
});
