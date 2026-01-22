// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Reveal animation
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Dark / Light mode
const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    toggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});
