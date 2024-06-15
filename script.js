function scrollToSection(id) {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

function toggleDropdown() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

// Add event listeners to the navigation links
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('nav ul li button');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            toggleDropdown();
        });
    });
});

const socket = io();

socket.on('visitorUpdate', (count) => {
    document.getElementById('visitor-count').textContent = count;
});

function toggleOthers() {
    var popup = document.getElementById('others-popup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
}