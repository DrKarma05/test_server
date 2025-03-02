document.addEventListener('DOMContentLoaded', function() {
    const rolesGrid = document.querySelector('.roles-grid');
    const roleCards = document.querySelectorAll('.role-card');
    const prevButton = document.querySelector('#roles .prev-button');
    const nextButton = document.querySelector('#roles .next-button');
    
    let currentIndex = 0;
    const isMobile = window.innerWidth <= 768;
    const cardWidth = isMobile ? 100 : (100 / 4); // 100% untuk mobile, 25% untuk desktop

    function updateSlider() {
        const translateX = -currentIndex * cardWidth;
        rolesGrid.style.transform = `translateX(${translateX}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + roleCards.length) % roleCards.length;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % roleCards.length;
        updateSlider();
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const newIsMobile = window.innerWidth <= 768;
        if (newIsMobile !== isMobile) {
            location.reload();
        }
    });
});