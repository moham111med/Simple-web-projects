// ============================================
// 1. Smooth scroll for internal links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// 2. Form validation (demo)
// ============================================
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('#name')?.value.trim();
        const email = form.querySelector('#email')?.value.trim();
        const message = form.querySelector('#idea-space')?.value.trim();

        if (!name || !email || !message) {
            alert('من فضلك املأ جميع الحقول المطلوبة.');
            return;
        }

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) {
            alert('من فضلك أدخل بريداً إلكترونياً صحيحاً.');
            return;
        }

        alert('تم استلام رسالتك! (نموذج تجريبي)');
        form.reset();
    });
}

// ============================================
// 3. Reveal sections on scroll
// ============================================
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// ============================================
// 4. Active nav link on scroll
// ============================================
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) current = section.id;
    });

    navLinks.forEach((link) => {
        link.style.backgroundColor =
            link.getAttribute('href') === `#${current}` ? 'var(--clr-accent)' : '';
        link.style.color =
            link.getAttribute('href') === `#${current}` ? 'var(--clr-white)' : '';
    });
});

// ============================================
// 5. Console message
// ============================================
console.log('%c👋 أهلاً! شكراً لزيارتك بورتفوليو محمد.', 'color:#f68b00;font-size:14px;font-weight:bold;');