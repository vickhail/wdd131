document.addEventListener("DOMContentLoaded", function () {
    const modificationDate = new Date(document.lastModified);
    const formattedDate = modificationDate.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById("modification-date").textContent = formattedDate;
});