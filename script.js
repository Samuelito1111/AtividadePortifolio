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
    // Abre ou fecha o menu lateral mobile
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu automaticamente após clicar em um link de seção
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
        // Guarda se o card que você clicou já estava aberto antes do clique
        const isAlreadyActive = card.classList.contains('active');

        // Fecha e recolhe o texto de todos os cards antes de abrir o novo
        techCards.forEach(c => c.classList.remove('active'));

        // Se ele não estava ativo antes, "morfa" e ativa o atual!
        if (!isAlreadyActive) {
            card.classList.add('active');
        }
    });
});