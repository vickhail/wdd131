document.addEventListener("DOMContentLoaded", function () {

    const yearSpan = document.getElementById('2024');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    const lastModifiedSpan = document.getElementById('06/15/2024');
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
});