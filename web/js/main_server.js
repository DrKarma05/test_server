// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(44, 62, 80, 0.95)';
        } else {
            header.style.background = 'rgba(44, 62, 80, 0.7)';
        }
    });

    // Role Purchase Handler
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add your purchase logic here
            alert('Redirecting to payment gateway...');
        });
    });
});

// Floating WhatsApp Button Animation
const whatsappButton = document.querySelector('.whatsapp-button');
whatsappButton.addEventListener('mouseover', () => {
    whatsappButton.style.transform = 'scale(1.1)';
});

whatsappButton.addEventListener('mouseout', () => {
    whatsappButton.style.transform = 'scale(1)';
});