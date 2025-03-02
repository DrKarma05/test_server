document.addEventListener('DOMContentLoaded', function() {
    const tutorialGrid = document.querySelector('.tutorial-grid');
    const tutorialCards = document.querySelectorAll('.tutorial-card');
    const prevButton = document.querySelector('#tutorials .prev-button');
    const nextButton = document.querySelector('#tutorials .next-button');
    
    let currentIndex = 0;
    const isMobile = window.innerWidth <= 768;
    const cardWidth = isMobile ? 100 : (100 / 4); // 100% untuk mobile, 25% untuk desktop
    const totalSlides = document.querySelectorAll('.slide').length; // Akan otomatis menghitung jumlah slide baru

    function updateSlider() {
        const translateX = -currentIndex * cardWidth;
        tutorialGrid.style.transform = `translateX(${translateX}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + tutorialCards.length) % tutorialCards.length;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % tutorialCards.length;
        updateSlider();
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const newIsMobile = window.innerWidth <= 768;
        if (newIsMobile !== isMobile) {
            location.reload(); // Reload halaman jika ukuran berubah antara mobile dan desktop
        }
    });
}); 