// --- 1. CONTROLE DO NAVBAR AO ROLAR A PÁGINA (via classe CSS) ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    // Alterna a classe em vez de manipular estilos inline
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
});

// --- 2. CONTROLE DO MENU RESPONSIVO (HAMBÚRGUER) COM ACESSIBILIDADE ---
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        // Atualiza aria-expanded para leitores de tela
        menuBtn.setAttribute('aria-expanded', isActive);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// --- 3. LÓGICA DOS CARDS DO ARSENAL TECNOLÓGICO ---
const techCards = document.querySelectorAll('.tech-card');

techCards.forEach(card => {
    card.addEventListener('click', () => {
        const isAlreadyActive = card.classList.contains('active');

        techCards.forEach(c => c.classList.remove('active'));

        if (!isAlreadyActive) {
            card.classList.add('active');
        }
    });
});

// --- 4. INTERSECTION OBSERVER (SCROLL REVEAL) ---
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});