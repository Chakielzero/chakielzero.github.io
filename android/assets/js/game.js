// Variables para optimización
let scrollTimeout;
let isScrolling = false;

// Efecto de difuminado al hacer scroll - Ahora usa la clase CSS 'hidden'
window.addEventListener("scroll", () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const mainImage = document.querySelector("#main-image img");
            if (mainImage) {
                const scrollY = window.scrollY;
                if (scrollY > 150) {
                    mainImage.classList.add('hidden');
                } else {
                    mainImage.classList.remove('hidden');
                }
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Filtro de juegos por ID - Optimizado con debouncing
function filterGames() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const games = document.querySelectorAll('.game');

        games.forEach(game => {
            const gameID = game.getAttribute('data-id').toLowerCase();
            const shouldShow = gameID.includes(searchInput);
            
            if (shouldShow) {
                game.style.display = 'block';
            } else {
                game.style.display = 'none';
            }
        });
    }, 150);
}

// Función para crear imagen optimizada (sin estilos JS)
function createOptimizedImage(imgSrc, altText, title) {
    const img = document.createElement('img');
    
    img.alt = altText;
    img.title = title;
    img.loading = 'lazy';

    img.onerror = function() {
        this.src = 'placeholder_error.png'; // Un placeholder de error que puedes definir
        this.classList.add('error-image'); // Clase para estilos de error en CSS
    };
    
    // Intersection Observer para carga eficiente
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = imgSrc;
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });
        
        imageObserver.observe(img);
    } else {
        img.src = imgSrc;
    }
    
    return img;
}

// Función optimizada para añadir los juegos al DOM
function addGameToGallery({id, imgSrc, altText, title, downloadLink2}) {
    const gallery = document.getElementById('gallery');
    const gameDiv = document.createElement('div');
    gameDiv.classList.add('game');
    gameDiv.setAttribute('data-id', id);

    const optimizedImg = createOptimizedImage(imgSrc, altText, title);
    
    const titleP = document.createElement('p');
    titleP.textContent = title;
    
    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'Descargar';
    downloadBtn.classList.add('game-download-btn'); // Nueva clase para el botón
    
    downloadBtn.onclick = () => window.location.href = downloadLink2;
    
    gameDiv.appendChild(optimizedImg);
    gameDiv.appendChild(titleP);
    gameDiv.appendChild(downloadBtn);

    const fragment = document.createDocumentFragment();
    fragment.appendChild(gameDiv);
    gallery.appendChild(fragment);
}

// Inicializar funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Lógica JavaScript inicializada correctamente');
});