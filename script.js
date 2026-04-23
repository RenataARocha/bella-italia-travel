// Bella Italia — script.js

// ========================
// DADOS DOS DESTINOS
// ========================
const destinos = {
    roma: {
        nome: 'Roma',
        dias: '7 dias',
        preco: 'a partir de R$ 8.990',
        imagem: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
        descricao: 'A Cidade Eterna é um museu a céu aberto. Em cada esquina há uma história de mais de 2.700 anos esperando para ser descoberta.',
        destaques: [
            '🏛 Coliseu e Fórum Romano',
            '⛪ Vaticano e Basílica de São Pedro',
            '⛲ Fontana di Trevi',
            '🏛 Panteão',
            '🌿 Villa Borghese',
        ],
        inclusos: [
            '✈ Voo de ida e volta',
            '🏨 Hotel 4 estrelas com café da manhã',
            '🎫 Ingressos para atrações principais',
            '🚌 Transfer aeroporto',
            '📞 Suporte 24h',
        ],
    },
    veneza: {
        nome: 'Veneza',
        dias: '5 dias',
        preco: 'a partir de R$ 7.490',
        imagem: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800',
        descricao: 'Construída sobre 118 ilhas, Veneza é a única cidade do mundo sem carros. Seus canais, pontes e palácios criam um cenário completamente único.',
        destaques: [
            '🚣 Passeio de gôndola pelos canais',
            '🏛 Praça e Basílica de São Marcos',
            '🌉 Ponte de Rialto',
            '🎭 Palácio Ducal',
            '🏝 Ilha de Murano (vidros artesanais)',
        ],
        inclusos: [
            '✈ Voo de ida e volta',
            '🏨 Hotel boutique no centro histórico',
            '🚢 Passeio de gôndola incluso',
            '🚌 Transfer aeroporto',
            '📞 Suporte 24h',
        ],
    },
    florenca: {
        nome: 'Florença',
        dias: '6 dias',
        preco: 'a partir de R$ 7.990',
        imagem: 'https://images.unsplash.com/photo-1541370976299-4d24be63a9f2?w=800',
        descricao: 'Berço do Renascimento, Florença concentra uma das maiores coleções de arte do mundo. A cidade que deu ao mundo Da Vinci, Michelangelo e Botticelli.',
        destaques: [
            '🎨 Galeria Uffizi',
            '⛪ Catedral de Santa Maria del Fiore',
            '🗿 Estátua do Davi (Galeria da Academia)',
            '🌉 Ponte Vecchio',
            '🌿 Jardins de Boboli',
        ],
        inclusos: [
            '✈ Voo de ida e volta',
            '🏨 Hotel 4 estrelas no centro histórico',
            '🎫 Ingressos para museus principais',
            '🚌 Transfer aeroporto',
            '📞 Suporte 24h',
        ],
    },
    toscana: {
        nome: 'Toscana',
        dias: '8 dias',
        preco: 'a partir de R$ 9.490',
        imagem: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800',
        descricao: 'Colinas cobertas de vinhedos, ciprestes e papoulas. A Toscana é a região mais romântica da Itália — um roteiro perfeito para quem quer fugir das multidões.',
        destaques: [
            '🍷 Tour por vinícolas com degustação',
            '🏰 Siena e sua Piazza del Campo',
            '🏛 San Gimignano (torres medievais)',
            '🌻 Vale de Orcia (Patrimônio UNESCO)',
            '🧀 Aula de culinária toscana',
        ],
        inclusos: [
            '✈ Voo de ida e volta',
            '🏨 Villa rural com piscina',
            '🚗 Carro alugado incluso no pacote',
            '🍷 Degustação de vinhos',
            '📞 Suporte 24h',
        ],
    },
    como: {
        nome: 'Lago di Como',
        dias: '4 dias',
        preco: 'a partir de R$ 6.990',
        imagem: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800',
        descricao: 'Cercado pelos Alpes, o Lago di Como é o destino favorito de celebridades e um dos mais belos da Europa. Água cristalina, vilas históricas e uma atmosfera de sonho.',
        destaques: [
            '⛵ Passeio de barco pelo lago',
            '🏰 Villa Balbianello',
            '🚡 Teleférico até Brunate',
            '🌸 Jardins de Villa Carlotta',
            '🍦 Gelato nas orlas de Bellagio',
        ],
        inclusos: [
            '✈ Voo de ida e volta',
            '🏨 Hotel à beira do lago',
            '⛵ Passeio de barco incluso',
            '🚌 Transfer aeroporto',
            '📞 Suporte 24h',
        ],
    },
    amalfi: {
        nome: 'Costa Amalfitana',
        dias: '6 dias',
        preco: 'a partir de R$ 8.490',
        imagem: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800',
        descricao: 'Classificada como Patrimônio da Humanidade pela UNESCO, a Costa Amalfitana é um espetáculo de penhascos, mar turquesa e vilarezinhos coloridos pendurados nas rochas.',
        destaques: [
            '🏘 Positano e suas casas coloridas',
            '🍋 Degustação de limoncello artesanal',
            '🚢 Passeio de barco para Capri',
            '⛪ Catedral de Amalfi',
            '🥾 Trilha Sentiero degli Dei',
        ],
        inclusos: [
            '✈ Voo de ida e volta',
            '🏨 Hotel com vista para o mar',
            '🚢 Passeio de barco para Capri incluso',
            '🚌 Transfer aeroporto',
            '📞 Suporte 24h',
        ],
    },
};

// ========================
// MODAL
// ========================
const modal = document.getElementById('modal');
const modalFechar = document.getElementById('modalFechar');

const abrirModal = (id) => {
    const destino = destinos[id];
    if (!destino) return;

    document.getElementById('modalImagem').style.backgroundImage = `url('${destino.imagem}')`;
    document.getElementById('modalImagem').setAttribute('aria-label', `Foto de ${destino.nome}`);
    document.getElementById('modalNome').textContent = destino.nome;
    document.getElementById('modalDias').textContent = destino.dias;
    document.getElementById('modalPreco').textContent = destino.preco;
    document.getElementById('modalDescricao').textContent = destino.descricao;

    document.getElementById('modalDestaques').innerHTML = destino.destaques
        .map(item => `<li>${item}</li>`)
        .join('');

    document.getElementById('modalInclusos').innerHTML = destino.inclusos
        .map(item => `<li>${item}</li>`)
        .join('');

    modal.classList.add('aberto');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Foco no botão fechar (acessibilidade)
    modalFechar.focus();
};

const fecharModal = () => {
    modal.classList.remove('aberto');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

// Botões "Saber mais"
document.querySelectorAll('.btn-saberMais').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-destino');
        abrirModal(id);
    });
});

// Fechar pelo botão X
modalFechar.addEventListener('click', fecharModal);

// Fechar clicando fora do conteúdo
modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal();
});

// Fechar com tecla Escape (acessibilidade)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('aberto')) {
        fecharModal();
    }
});

// ========================
// MENU MOBILE
// ========================
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

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('aberto');
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    });
});

document.addEventListener('click', (evento) => {
    const clicouFora =
        !mobileMenu.contains(evento.target) && !menuBtn.contains(evento.target);

    if (clicouFora && mobileMenu.classList.contains('aberto')) {
        mobileMenu.classList.remove('aberto');
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    }
});

// ========================
// NAVBAR AO ROLAR
// ========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});