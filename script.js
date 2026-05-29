// --- 1. CONTROLE DO NAVBAR AO ROLAR A PÁGINA ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.padding = '12px 8%';
        navbar.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.9), 0 2px 10px rgba(230, 0, 18, 0.1)';
    } else {
        navbar.style.padding = '20px 8%';
        navbar.style.boxShadow = '0 4px 15px rgba(230, 0, 18, 0.2)';
    }
});

// --- 2. CONTROLE DO MENU RESPONSIVO (HAMBÚRGUER) ---
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
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

// --- 4. NOVO: INTERSECTION OBSERVER (SCROLL REVEAL) ---
// Adiciona efeito dinâmico onde os elementos surgem ao rolar a página
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Uma vez revelado, cancela a observação para melhorar a performance
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // Ativa quando 15% do elemento estiver visível
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});