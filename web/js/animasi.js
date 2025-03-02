// Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.tutorial-card, .role-card');
    hiddenElements.forEach((el) => observer.observe(el));
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Text Fade Animation
document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.fade-text');
    let currentIndex = 0;
    
    function nextText() {
        // Add fade-out class to current text
        texts[currentIndex].classList.add('fade-out');
        texts[currentIndex].classList.remove('active');
        
        // Move to next text
        currentIndex = (currentIndex + 1) % texts.length;
        
        // Delay showing next text for smooth transition
        setTimeout(() => {
            // Remove fade-out from all texts
            texts.forEach(text => text.classList.remove('fade-out'));
            // Add active to new text
            texts[currentIndex].classList.add('active');
        }, 800); // Sesuaikan dengan durasi transisi CSS
    }

    // Change text every 5 seconds
    setInterval(nextText, 5000);

    // Set initial state
    texts[0].classList.add('active');
});

// File JavaScript baru untuk animasi custom

// Parallax scroll effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-scroll');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.setProperty('--scroll-offset', `${scrolled * speed}px`);
    });
});

// Smooth reveal on scroll
const revealElements = document.querySelectorAll('.reveal-on-scroll');
const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Cursor follow effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-follow');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Text scramble effect
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Inisialisasi text scramble effect
document.querySelectorAll('.scramble-text').forEach(el => {
    const fx = new TextScramble(el);
    fx.setText(el.textContent);
});