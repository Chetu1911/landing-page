document.addEventListener('DOMContentLoaded', function () {
    // Show popup on page load
    document.getElementById('contact-popup').style.display = 'block';

    // Close popup
    document.querySelector('.close-btn').addEventListener('click', function () {
        document.getElementById('contact-popup').style.display = 'none';
    });
});