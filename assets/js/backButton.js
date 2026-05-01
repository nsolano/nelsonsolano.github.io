// Back to Top functionality
const backButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backButton.classList.add('show');
    } else {
        backButton.classList.remove('show');
    }
});
backButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});