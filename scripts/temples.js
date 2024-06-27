document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = document.lastModified;

    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '&#9776;';
    nav.parentElement.insertBefore(toggleButton, nav);

    toggleButton.addEventListener('click', () => {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
            toggleButton.innerHTML = '&#9776;';
        } else {
            nav.style.display = 'flex';
            toggleButton.innerHTML = '&times;';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            nav.style.display = 'flex';
            toggleButton.style.display = 'none';
        } else {
            nav.style.display = 'none';
            toggleButton.style.display = 'block';
        }
    });

    if (window.innerWidth < 768) {
        nav.style.display = 'none';
        toggleButton.style.display = 'block';
    } else {
        nav.style.display = 'flex';
        toggleButton.style.display = 'none';
    }
});