// Bella Italia — script.js

// Menu mobile
const menuBtn = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-menu__link');

menuBtn.addEventListener('click', () => {
    const estaAberto = mobileMenu.classList.contains('aberto');

    if (estaAberto) {
        mobileMenu.classList.remove('aberto');
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    } else {
        mobileMenu.classList.add('aberto');
        menuBtn.setAttribute('aria-expanded', 'true');
        mobileMenu.setAttribute('aria-hidden', 'false');
    }
});

// Fecha o menu ao clicar em um link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('aberto');
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    });
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (evento) => {
    const clicouFora =
        !mobileMenu.contains(evento.target) && !menuBtn.contains(evento.target);

    if (clicouFora && mobileMenu.classList.contains('aberto')) {
        mobileMenu.classList.remove('aberto');
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    }
});

// Sombra na navbar ao rolar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});