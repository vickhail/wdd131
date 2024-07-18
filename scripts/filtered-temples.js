const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Concepción Chile Temple",
        location: "Concepción, Chile",
        dedicated: "2018, October, 28",
        area: 23095,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/01-Concepcion-Chile-Temple-2113673.jpg"
    },
    {
        templeName: "Santiago Chile Temple",
        location: "Santiago, Chile",
        dedicated: "1983, September, 15",
        area: 20831,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/400x250/santiago-chile-lds-temple-1085562-wallpaper.jpg"
    },
    {
        templeName: "Montevideo Uruguay Temple",
        location: "Montevideo, Uruguay",
        dedicated: "2001, March, 18",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montevideo-uruguay/400x250/montevideo-uruguay-mormon-temple-933183-wallpaper.jpg"
    },
];

function displayTemples(templeArray) {
    const templeContainer = document.getElementById('temple-container');
    templeContainer.innerHTML = '';
    templeArray.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');
        templeCard.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area} sq ft</p>
            <img data-src="${temple.imageUrl}" alt="${temple.templeName}" class="lazy-image" src="">
        `;
        templeContainer.appendChild(templeCard);
    });

    const lazyImages = document.querySelectorAll('.lazy-image');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-image');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0.1
    });

    lazyImages.forEach(image => {
        observer.observe(image);
    });
}

document.getElementById('filter-old').addEventListener('click', () => {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    displayTemples(oldTemples);
});

document.getElementById('filter-new').addEventListener('click', () => {
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    displayTemples(newTemples);
});

document.getElementById('filter-large').addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById('filter-small').addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
});

document.getElementById('filter-home').addEventListener('click', () => {
    displayTemples(temples);
});

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        menuToggle.innerHTML = '&#9776;';
    } else {
        nav.style.display = 'flex';
        menuToggle.innerHTML = '&times;';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        nav.style.display = 'flex';
        menuToggle.style.display = 'none';
    } else {
        nav.style.display = 'none';
        menuToggle.style.display = 'block';
    }
});

if (window.innerWidth < 768) {
    nav.style.display = 'none';
    menuToggle.style.display = 'block';
} else {
    nav.style.display = 'flex';
    menuToggle.style.display = 'none';
};

displayTemples(temples);

document.getElementById('last-modified').textContent = document.lastModified;
document.querySelector('footer p span').textContent = new Date().getFullYear();