// JavaScript for Sticky Header Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Lightbox functionality remains the same for the image gallery
document.querySelectorAll('.image-grid img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);
        
        const imgClone = img.cloneNode();
        lightbox.appendChild(imgClone);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});
