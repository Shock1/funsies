document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inputForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input value
        const inputValue = document.getElementById('inputField').value.trim();

        // Check if the input matches the specific word
        if (inputValue.toLowerCase() === 'lovlove you') {
            // Redirect to the next page if the input matches
            window.location.href = '../index.html';
        } else {
            // Display an error message or handle the incorrect input
            alert('Incorrect input. Please try again.');
        }
    });
});