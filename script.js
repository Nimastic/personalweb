function scrollToSection(id) {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

const socket = io();

socket.on('visitorUpdate', (count) => {
    document.getElementById('visitor-count').textContent = count;
});