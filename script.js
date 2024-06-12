function scrollToSection(id) {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}
