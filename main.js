// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission alert (for demonstration purposes)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});
