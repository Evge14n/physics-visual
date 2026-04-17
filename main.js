/* ============================================
   Physics Visual - Main JavaScript
   ============================================ */

const TOPICS = [
    { id: 1, title: "Вступ. Рівномірний рух. Середня швидкість. Відносність руху", section: "mechanics", completed: false },
    { id: 2, title: "Рівноприскорений прямолінійний рух. Рух тіл по вертикалі під дією сили тяжіння", section: "mechanics", completed: false },
    { id: 3, title: "Рух по горизонту під дією сили тяжіння", section: "mechanics", completed: false },
    { id: 4, title: "Рівномірний рух по колу", section: "mechanics", completed: false },
    { id: 5, title: "Закони Ньютона", section: "mechanics", completed: false },
    { id: 6, title: "Закон всесвітнього тяжіння. Супутники", section: "mechanics", completed: false },
    { id: 7, title: "Сила пружності. Вага і невагомість", section: "mechanics", completed: false },
    { id: 8, title: "Сила тертя", section: "mechanics", completed: false },
    { id: 9, title: "Імпульс. Закон збереження імпульсу", section: "mechanics", completed: false },
    { id: 10, title: "Динаміка рівномірного руху тіла по колу", section: "mechanics", completed: false },
    { id: 11, title: "Статика", section: "mechanics", completed: false },
    { id: 12, title: "Закон збереження енергії", section: "mechanics", completed: false },
    { id: 13, title: "Механічна робота. Потужність. ККД. Прості механізми", section: "mechanics", completed: false },
    { id: 14, title: "Засоби збереження механічної енергії", section: "mechanics", completed: false },
    { id: 15, title: "Елементи механіки рідин і газів", section: "mechanics", completed: false },
    { id: 16, title: "Основи молекулярно-кінетичної теорії", section: "molecular", completed: false },
    { id: 17, title: "Рівняння стану ідеального газу. Ізопроцеси", section: "molecular", completed: false },
    { id: 18, title: "Насичена пара. Вологість повітря", section: "molecular", completed: false },
    { id: 19, title: "Поверхневий натяг. Капілярність", section: "molecular", completed: false },
    { id: 20, title: "Властивості твердих тіл. Механізм деформацій", section: "molecular", completed: false },
    { id: 21, title: "Основи термодинаміки", section: "thermo", completed: false },
    { id: 22, title: "Закон агрегатних станів речовини. Рівняння теплового балансу", section: "thermo", completed: false },
    { id: 23, title: "Закон Кулона. Напруженість поля", section: "electro", completed: false },
    { id: 24, title: "Потенціал. Різниця потенціалів. Робота електростатичного поля", section: "electro", completed: false },
    { id: 25, title: "Електроємність. Енергія конденсаторів", section: "electro", completed: false },
    { id: 26, title: "Постійний струм. Закон Ома для ділянки кола", section: "electro", completed: false },
    { id: 27, title: "Закон Ома для повного (замкнутого) кола", section: "electro", completed: false },
    { id: 28, title: "Робота і потужність струму. Закон Джоуля — Ленца", section: "electro", completed: false },
    { id: 29, title: "Струм у різних середовищах", section: "electro", completed: false },
    { id: 30, title: "Магнітне поле", section: "magnetic", completed: true },
    { id: 31, title: "Електромагнітна індукція", section: "magnetic", completed: true },
    { id: 32, title: "Механічні коливання", section: "oscillations", completed: true },
    { id: 33, title: "Механічні хвилі. Звук", section: "oscillations", completed: true },
    { id: 34, title: "Вільні електромагнітні коливання", section: "oscillations", completed: true },
    { id: 35, title: "Змінний струм", section: "oscillations", completed: true },
    { id: 36, title: "Електромагнітні хвилі", section: "oscillations", completed: true },
    { id: 37, title: "Елементи геометричної оптики", section: "optics", completed: false },
    { id: 38, title: "Лінзи", section: "optics", completed: false },
    { id: 39, title: "Хвильова оптика", section: "optics", completed: false },
    { id: 40, title: "Елементи теорії відносності", section: "modern", completed: false },
    { id: 41, title: "Кванти світла", section: "modern", completed: false },
    { id: 42, title: "Атомна фізика", section: "modern", completed: false },
    { id: 43, title: "Ядерна фізика", section: "modern", completed: false }
];

const SECTIONS = {
    mechanics: { name: "Механіка", icon: "&#9881;" },
    molecular: { name: "Молекулярна фізика", icon: "&#9883;" },
    thermo: { name: "Термодинаміка", icon: "&#9832;" },
    electro: { name: "Електрика", icon: "&#9889;" },
    magnetic: { name: "Магнетизм", icon: "&#9788;" },
    oscillations: { name: "Коливання і хвилі", icon: "&#8767;" },
    optics: { name: "Оптика", icon: "&#128270;" },
    modern: { name: "Сучасна фізика", icon: "&#9883;" }
};

/* ============================================
   Navigation & Sidebar
   ============================================ */
function initSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    const menuBtn = document.querySelector('.header__menu-btn');
    const overlay = document.querySelector('.sidebar-overlay');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
}

/* ============================================
   Search
   ============================================ */
function initSearch() {
    const searchInput = document.querySelector('.header__search input');
    const searchResults = document.querySelector('.search-results');
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        const matches = TOPICS.filter(t =>
            t.title.toLowerCase().includes(query) ||
            t.id.toString() === query
        );

        if (matches.length === 0) {
            searchResults.innerHTML = '<div class="search-results__item" style="color: var(--text-muted);">Нічого не знайдено</div>';
        } else {
            searchResults.innerHTML = matches.map(t => `
                <a href="topics/topic-${t.id}.html" class="search-results__item">
                    <span class="search-results__item-number">${t.id}</span>
                    <span>${t.title}</span>
                </a>
            `).join('');
        }

        searchResults.classList.add('active');
    });

    searchInput.addEventListener('blur', () => {
        setTimeout(() => searchResults.classList.remove('active'), 200);
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            searchInput.blur();
        }
    });
}

/* ============================================
   Progress Tracking
   ============================================ */
function getProgress() {
    const saved = localStorage.getItem('physics-progress');
    return saved ? JSON.parse(saved) : {};
}

function saveProgress(topicId) {
    const progress = getProgress();
    progress[topicId] = true;
    localStorage.setItem('physics-progress', JSON.stringify(progress));
}

function getCompletedCount() {
    const progress = getProgress();
    return Object.keys(progress).length;
}

function updateProgressDisplay() {
    const el = document.querySelector('.header__progress-info');
    if (el) {
        const count = getCompletedCount();
        el.innerHTML = `Прогрес: <span>${count}</span> / ${TOPICS.length} тем`;
    }
}

/* ============================================
   Solution Toggle
   ============================================ */
function initSolutionToggles() {
    document.querySelectorAll('.problem__solution-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            if (content) {
                content.classList.toggle('active');
                const arrow = btn.querySelector('.toggle-arrow');
                if (arrow) {
                    arrow.textContent = content.classList.contains('active') ? '\u25B2' : '\u25BC';
                }
            }
        });
    });
}

/* ============================================
   KaTeX Rendering
   ============================================ */
function renderKaTeX() {
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '\\[', right: '\\]', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\(', right: '\\)', display: false }
            ],
            throwOnError: false
        });
    }
}

/* ============================================
   Init
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initSearch();
    initSolutionToggles();
    updateProgressDisplay();

    // Render KaTeX after a small delay to ensure CDN is loaded
    setTimeout(renderKaTeX, 300);
});
