const products = [
    {
        name: 'Remera Boxy - Negro',
        category: 'remeras',
        price: 'Gs. 180.000',
        details: 'Algodón Pesado · Fit Boxy',
        colors: ['#050505'],
    },
    {
        name: 'Remera Boxy - Blanco',
        category: 'remeras',
        price: 'Gs. 180.000',
        details: 'Algodón Pesado · Fit Boxy',
        colors: ['#f0f0f0'],
    },
    {
        name: 'Remera Boxy - Gris',
        category: 'remeras',
        price: 'Gs. 180.000',
        details: 'Algodón Pesado · Fit Boxy',
        colors: ['#4a4a4a'],
    },
    {
        name: 'Remera Cropped - Negro',
        category: 'remeras',
        price: 'Gs. 160.000',
        details: 'Corte a la cintura · Fit relajado',
        colors: ['#050505'],
    },
    {
        name: 'Remera Cropped - Blanco',
        category: 'remeras',
        price: 'Gs. 160.000',
        details: 'Corte a la cintura · Fit relajado',
        colors: ['#f0f0f0'],
    },
    {
        name: 'Remera Cropped - Gris',
        category: 'remeras',
        price: 'Gs. 160.000',
        details: 'Corte a la cintura · Fit relajado',
        colors: ['#4a4a4a'],
    },
    {
        name: 'Jean Recto - Índigo',
        category: 'jeans',
        price: 'Gs. 380.000',
        details: 'Corte recto clásico · Denim',
        colors: ['#1a2b4c'],
        image: 'raven jeans azules.png'
    },
    {
        name: 'Jean Baggy - Celeste',
        category: 'jeans',
        price: 'Gs. 400.000',
        details: 'Pierna ancha · Lavado claro vintage',
        colors: ['#8cbcd0'],
    },
];

const lookbook = [
    {
        title: 'Boxy + Baggy',
        caption: 'Silueta ancha completa.',
        gradient: 'linear-gradient(to bottom, #e0e0e0, #ffffff)'
    },
    {
        title: 'Cropped + Straight',
        caption: 'Proporciones equilibradas.',
        gradient: 'linear-gradient(to bottom, #1a1a1a, #333333)'
    },
    {
        title: 'Total Black',
        caption: 'Esenciales nocturnos.',
        gradient: 'linear-gradient(to bottom, #000000, #1a1a1a)'
    }
];

const productGrid = document.querySelector('#productGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lookbookTrack = document.querySelector('#lookbookTrack');

const renderProducts = (filter = 'all') => {
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    productGrid.innerHTML = filtered.map(product => `
        <article class="product-card" data-category="${product.category}">
            <figure>
                ${product.image ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">` : ''}
            </figure>
            <h3>${product.name}</h3>
            <p class="product-meta">${product.details}</p>
            <div class="product-meta">${product.price}</div>
            <div class="swatches">
                ${product.colors.map(color => `<span style="background:${color}"></span>`).join('')}
            </div>
        </article>
    `).join('');
};

const renderLookbook = () => {
    lookbookTrack.innerHTML = lookbook.map(item => `
        <article class="lookbook-card">
            <figure style="background:${item.gradient}"></figure>
            <h3>${item.title}</h3>
            <p>${item.caption}</p>
        </article>
    `).join('');
};

renderProducts();
renderLookbook();

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderProducts(button.dataset.filter);
    });
});

const scrollButtons = document.querySelectorAll('[data-scroll]');
scrollButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.querySelector(btn.dataset.scroll);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Lookbook slider logic for small screens
let currentIndex = 0;

const moveLookbook = (direction) => {
    const cards = lookbookTrack.children;
    currentIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + direction));
    const offset = cards[currentIndex]?.offsetLeft || 0;
    lookbookTrack.scrollTo({
        left: offset,
        behavior: 'smooth'
    });
};

document.querySelector('#prevLook').addEventListener('click', () => moveLookbook(-1));
document.querySelector('#nextLook').addEventListener('click', () => moveLookbook(1));

// Custom Cursor Logic
const cursor = document.getElementById('cursor-raven');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(2px, -12px) scale(0.9)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(2px, -16px) scale(1)';
});

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    themeBtn.textContent = isLight ? '⚫' : '⚪';
});
