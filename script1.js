/* function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}

function navigateTo(event) {
    event.preventDefault();
    var sectionId = event.target.getAttribute('data-section');
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu();
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.menu-links a').forEach(function(link) {
        link.addEventListener('click', navigateTo);
    });
}); */

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    const blogContainers = document.querySelectorAll('.color-container');

    blogContainers.forEach(container => {
        container.addEventListener('click', function() {
            const blogUrl = this.getAttribute('data-blog-url');
            if (blogUrl) {
                window.location.href = blogUrl;
            }
        });

        container.style.cursor = 'pointer';
    });
});
