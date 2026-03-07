// ─────────────────────────────────────────────
//  game.js  |  ChakielRoms — Motor universal
//  Colócalo en: assets/js/game.js (raíz)
// ─────────────────────────────────────────────

// ── Scroll: ocultar imagen principal ──────────
let isScrolling = false;

window.addEventListener("scroll", () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const mainImage = document.querySelector("#main-image img");
            if (mainImage) {
                mainImage.classList.toggle('hidden', window.scrollY > 150);
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// ── Búsqueda con debouncing ───────────────────
let searchTimeout;

function filterGames() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = document.getElementById('search-input').value.toLowerCase().trim();
        document.querySelectorAll('.game').forEach(game => {
            const id    = (game.dataset.id    || '').toLowerCase();
            const title = (game.dataset.title || '').toLowerCase();
            game.style.display = (id.includes(query) || title.includes(query)) ? '' : 'none';
        });
    }, 150);
}

// ── IntersectionObserver compartido ──────────
const imageObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                obs.unobserve(img);
            }
        });
    }, { rootMargin: '100px 0px' })
    : null;

// ── Crear imagen con lazy load ────────────────
function createImage(coverImageUrl, title) {
    const img = document.createElement('img');
    img.alt     = title;
    img.title   = title;
    img.loading = 'lazy';

    img.onerror = function () {
        this.removeAttribute('data-src');
        this.classList.add('error-image');
        this.alt = 'Imagen no disponible';
    };

    if (imageObserver) {
        img.dataset.src = coverImageUrl;
        imageObserver.observe(img);
    } else {
        img.src = coverImageUrl;
    }

    return img;
}

// ── Renderizar un juego en la galería ─────────
function renderGame(game) {
    const { id, title, description, coverImageUrl, downloadUrl, newTag } = game;

    const div = document.createElement('div');
    div.classList.add('game');
    div.dataset.id    = id;
    div.dataset.title = title;

    if (newTag) {
        const badge = document.createElement('span');
        badge.classList.add('game-badge');
        badge.textContent = newTag;
        div.appendChild(badge);
    }

    const img = createImage(coverImageUrl, title);

    const titleP = document.createElement('p');
    titleP.textContent = title;

    const desc = document.createElement('small');
    desc.classList.add('game-desc');
    desc.textContent = description;

    const btn = document.createElement('button');
    btn.textContent = 'Descargar';
    btn.classList.add('game-download-btn');
    btn.onclick = () => window.open(downloadUrl, '_blank', 'noopener');

    div.append(img, titleP, desc, btn);
    return div;
}

// ── Cargar games.json y filtrar por plataforma ─
async function loadGames() {
    const gallery = document.getElementById('gallery');

    // Lee data-platform del <script> tag
    const script   = document.currentScript || document.querySelector('script[data-platform]');
    const platform = script ? script.dataset.platform : null;

    try {
        const res = await fetch('/assets/js/games.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data  = await res.json();
        let games   = data.games ?? [];

        // Filtrar por plataforma si se especificó
        if (platform) {
            games = games.filter(g => g.platforms.includes(platform));
        }

        if (games.length === 0) {
            gallery.innerHTML = '<p class="empty-msg">No hay juegos disponibles.</p>';
            return;
        }

        const fragment = document.createDocumentFragment();
        games.forEach(game => fragment.appendChild(renderGame(game)));
        gallery.appendChild(fragment);

    } catch (err) {
        console.error('Error cargando games.json:', err);
        gallery.innerHTML = '<p class="empty-msg error-msg">Error al cargar los juegos. Intenta recargar la página.</p>';
    }
}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    loadGames();
    console.log('✅ game.js inicializado');
});
