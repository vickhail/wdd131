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

const feedbackTextarea = document.getElementById('feedback');
const placeholderText = "Send a book you want reviewed or feedback to improve Literary Haven";

feedbackTextarea.addEventListener('focus', function() {
    if (this.value === placeholderText) {
        this.value = '';
        this.style.color = '#000';
    }
});

feedbackTextarea.addEventListener('blur', function() {
    if (this.value === '') {
        this.value = placeholderText;
        this.style.color = '#ccc';
    }
});

if (feedbackTextarea.value === '') {
    feedbackTextarea.value = placeholderText;
    feedbackTextarea.style.color = '#ccc';
}

if ('loading' in HTMLImageElement.prototype) {
    console.log('Browser supports lazy-loading');
} else {
    console.log('Browser does not support lazy-loading, using IntersectionObserver');
    document.addEventListener('DOMContentLoaded', function() {
        const lazyImages = [].slice.call(document.querySelectorAll('img[loading="lazy"]'));
        if ('IntersectionObserver' in window) {
            let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach(function(lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        } else {
            let lazyLoad = function() {
                lazyImages.forEach(function(lazyImage) {
                    if (lazyImage.getBoundingClientRect().top < window.innerHeight && lazyImage.getBoundingClientRect().bottom > 0 && getComputedStyle(lazyImage).display !== 'none') {
                        lazyImage.src = lazyImage.dataset.src;
                    }
                });
            };

            lazyLoad();
            window.addEventListener('scroll', lazyLoad);
            window.addEventListener('resize', lazyLoad);
            window.addEventListener('orientationchange', lazyLoad);
        }
    });
}

document.querySelectorAll('.user-rating span').forEach((star, index) => {
    star.addEventListener('click', function() {
        const rating = index + 1;
        const reviewId = this.closest('article').dataset.id;
        localStorage.setItem(`rating-${reviewId}`, rating);
        updateRatingDisplay(reviewId, rating);
    });
});

function updateRatingDisplay(reviewId, rating) {
    const stars = document.querySelectorAll(`[data-id="${reviewId}"] .user-rating span`);
    stars.forEach((star, index) => {
        star.textContent = index < rating ? '★' : '☆';
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