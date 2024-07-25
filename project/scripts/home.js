document.getElementById('mod-date').textContent = new Date().toLocaleDateString();

document.getElementById('hamburger').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.add('active');
    navbar.style.display = 'flex';
});

document.getElementById('close').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.remove('active');
    setTimeout(() => {
        navbar.style.display = 'none';
    }, 300);
});

window.addEventListener('resize', function() {
    var navbar = document.getElementById('navbar');
    if (window.innerWidth >= 769) {
        navbar.style.display = 'flex';
        navbar.classList.remove('active');
    } else {
        navbar.style.display = 'none';
    }
});

document.querySelectorAll('.user-rating').forEach(ratingContainer => {
    const reviewId = ratingContainer.closest('article').dataset.id;
    ratingContainer.querySelectorAll('span').forEach((star, index) => {
        star.addEventListener('click', function() {
            const rating = index + 1;
            localStorage.setItem(`rating-${reviewId}`, rating);
            updateRatingDisplay(reviewId, rating);
        });
    });
});

function updateRatingDisplay(reviewId, rating) {
    const stars = document.querySelectorAll(`[data-id="${reviewId}"] .user-rating span`);
    stars.forEach((star, index) => {
        if (index < rating) {
            star.textContent = '★';
            star.classList.add('selected');
        } else {
            star.textContent = '☆';
            star.classList.remove('selected');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('article[data-id]').forEach(article => {
        const reviewId = article.dataset.id;
        const rating = localStorage.getItem(`rating-${reviewId}`);
        if (rating) {
            updateRatingDisplay(reviewId, rating);
        }
    });
});