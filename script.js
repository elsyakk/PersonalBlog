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
