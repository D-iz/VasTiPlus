// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Переключение мобильного меню
    navToggle.addEventListener('click', function() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        
        // Анимация бургер-меню
        navToggle.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.classList.remove('active');
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.classList.remove('active');
        }
    });
});

// Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Изменение прозрачности шапки при скролле
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Наблюдение за элементами
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.service-card, .about__content, .contact__content');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Добавление стилей для анимации
if (!document.querySelector('#animation-styles')) {
    const animationStyles = document.createElement('style');
    animationStyles.id = 'animation-styles';
    animationStyles.textContent = `
        .service-card,
        .about__content,
        .contact__content {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
            .service-card,
            .about__content,
            .contact__content {
                opacity: 1;
                transform: none;
                transition: none;
            }
        }
    `;
    document.head.appendChild(animationStyles);
}

// Загрузка Google Fonts асинхронно для лучшей производительности
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
fontLink.media = 'print';
fontLink.onload = function() {
    this.media = 'all';
};
document.head.appendChild(fontLink);

// Предзагрузка критических ресурсов
const preloadLink = document.createElement('link');
preloadLink.rel = 'preload';
preloadLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
preloadLink.as = 'font';
preloadLink.type = 'font/woff2';
preloadLink.crossOrigin = 'anonymous';
document.head.appendChild(preloadLink); 