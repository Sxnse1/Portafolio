// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animaciones de entrada cuando los elementos entran en vista
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.project-card, .skill-item, .about-text, .experience-item, .education-item');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Funcionalidad del formulario de contacto
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando un servicio como Formspree, Netlify Forms, etc.
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simulación de envío exitoso
    showNotification('¡Mensaje enviado correctamente! Te contactaré pronto.', 'success');
    
    // Limpiar formulario
    this.reset();
});

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 400px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    `;
    
    // Color según el tipo
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #6366f1, #4f46e5)';
    }
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Efecto de typing en el título del hero
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Inicializar efecto de typing cuando carga la página
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Función para scroll suave hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Contador animado para estadísticas
function animateCounter(element, target, duration = 2000) {
    const start = parseInt(element.textContent) || 0;
    const increment = (target - start) / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Función para alternar el menú móvil (hamburger menu)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    if (navLinks && hamburger) {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
}

// Event listener para el botón hamburger
document.querySelector('.hamburger')?.addEventListener('click', toggleMobileMenu);

// Cerrar menú móvil al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        
        if (navLinks && hamburger) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Agregar botón de volver arriba dinámicamente
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.onclick = scrollToTop;
    
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(135deg, #3b82f6, #10b981);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.transform = 'scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(scrollToTopBtn);
});

// Funcionalidad del cambio de tema
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = document.getElementById('theme-icon');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        
        this.init();
    }
    
    init() {
        // Aplicar el tema guardado
        this.applyTheme(this.currentTheme);
        
        // Agregar event listener al botón
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        
        // Actualizar el icono
        if (this.themeIcon) {
            this.themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        
        // Cambiar el logo según el tema
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.src = theme === 'dark' ? 'img/logo-dark.svg' : 'img/logo.svg';
        }
        
        // Guardar en localStorage
        localStorage.setItem('theme', theme);
        
        // Actualizar el navbar según el scroll y el tema
        this.updateNavbarStyle();
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        
        // Agregar efecto visual al botón
        if (this.themeToggle) {
            this.themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.themeToggle.style.transform = 'scale(1)';
            }, 150);
        }
    }
    
    updateNavbarStyle() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
        if (window.scrollY > 100) {
            if (this.currentTheme === 'dark') {
                navbar.style.background = 'rgba(31, 41, 55, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            }
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            if (this.currentTheme === 'dark') {
                navbar.style.background = 'rgba(31, 41, 55, 0.95)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    }
}

// Inicializar el gestor de temas
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});

// Actualizar el evento de scroll existente para tener en cuenta el tema
window.addEventListener('scroll', () => {
    // Lógica existente del scroll...
    const navbar = document.querySelector('.navbar');
    const themeManager = new ThemeManager();
    
    if (window.scrollY > 100) {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(31, 41, 55, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        }
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(31, 41, 55, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    // Resto de la lógica de scroll existente...
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (window.pageYOffset > 300) {
        if (scrollToTopBtn) {
            scrollToTopBtn.style.display = 'flex';
        }
    } else {
        if (scrollToTopBtn) {
            scrollToTopBtn.style.display = 'none';
        }
    }
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

console.log('🚀 Portafolio de Chipi cargado correctamente!');