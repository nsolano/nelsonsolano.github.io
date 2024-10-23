// Smooth scroll function for navigation bar links
// document.querySelectorAll('.navbar a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         const targetSection = document.querySelector(targetId);

//         window.scrollTo({
//             top: targetSection.offsetTop - 20, // Adjust for margin
//             behavior: 'smooth'
//         });
//     });
// });
const toggle = document.getElementById('navbar-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
// Contact button function
function contactMe() {
    window.location.href = 'mailto:johndoe@example.com';
}

