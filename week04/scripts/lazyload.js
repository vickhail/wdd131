document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = document.lastModified;

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add("fade-in");
                    observer.unobserve(img);
                }
            });
        });
    }
});