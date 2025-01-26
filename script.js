document.getElementById('showWishesButton').addEventListener('click', function() {
    const wishes = [
        {
            "name": "Didi and Jijaji",
            "wish": "Happy Anniversary to a beautiful couple; may your love continue to blossom!"
        },
        {
            "name": "Brother",
            "wish": "Happy Anniversary, brother; wishing you endless love and joy!"
        }
    ];

    const wishesContainer = document.getElementById('wishesContainer');
    wishesContainer.innerHTML = wishes.map(wish => `<p><strong>${wish.name}:</strong> ${wish.wish}</p>`).join('');
});
