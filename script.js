// navbar
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// end

// fade in herro
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.fade-in');
    setTimeout(() => {
        title.classList.add('appear');
    }, 300);
});
// end

// kata rotasi
const words = ["personal", "efektif", "menyenangkan"];
const colors = ["#3D9CFB", "#ECEE8C", "#B79AF2"]; 
let index = 0;
const wordElement = document.getElementById("word-rotate");
setInterval(() => {
    wordElement.classList.add("fade-out");
    wordElement.classList.remove("fade-in");

    setTimeout(() => {
        index = (index + 1) % words.length;
        wordElement.textContent = words[index];
        wordElement.style.backgroundColor = colors[index];
        wordElement.classList.remove("fade-out");
        wordElement.classList.add("fade-in");
    }, 400);
}, 2500);
// end

// hitung jumlah data
const grid = document.querySelector('#kelompok-php .podcaster-grid');
grid.addEventListener('scroll', () => {
    if (grid.scrollLeft > 5) {
        grid.classList.add('is-scrolled');
    } else {
        grid.classList.remove('is-scrolled');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000;
                const startTime = performance.now();
                const updateNumber = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    const currentCount = Math.floor(progress * target);
                    counter.innerText = currentCount;
                    if (progress < 1) {
                        requestAnimationFrame(updateNumber);
                    } else {
                        counter.innerText = target;
                    }
                };
                requestAnimationFrame(updateNumber);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));
});
// end

// acordion
const items = document.querySelectorAll(".accordion-item");
items.forEach(item => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
        items.forEach(i => i.classList.remove("active"));
        item.classList.toggle("active");
    });
});
// interactive image

// anime js
const flowSection = document.querySelector('#how-it-works');
let flowPlayed = false;
const flowObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !flowPlayed) {
        flowPlayed = true;

        anime.timeline({
            easing: 'easeOutExpo'
        })
            .add({
                targets: '.flow-step:nth-of-type(1)',
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 600
            })
            .add({
                targets: '.flow-arrow:nth-of-type(2)',
                scaleX: [0, 1],
                duration: 400
            })
            .add({
                targets: '.flow-step:nth-of-type(3)',
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 600
            })
            .add({
                targets: '.flow-arrow:nth-of-type(4)',
                scaleX: [0, 1],
                duration: 400
            })
            .add({
                targets: '.flow-step:nth-of-type(5)',
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 600
            });
    }
}, { threshold: 0.4 });
flowObserver.observe(flowSection);
// anime js end

// team carousel
function scrollGrid(direction) {
    const grid = document.querySelector('#kelompok-php .podcaster-grid');
    const scrollAmount = 300; 

    grid.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Fungsi untuk memilih kartu (aktif/melebar)
function pilihKartu(card) {
    const grid = document.querySelector('#kelompok-php .podcaster-grid');
    const cards = grid.querySelectorAll('.card-anggota');

    // 1. Reset state
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    // 2. Pastikan scroll tidak melewati batas setelah card melebar
    requestAnimationFrame(() => {
        const maxScrollLeft = grid.scrollWidth - grid.clientWidth;
        const currentScrollLeft = grid.scrollLeft;

        if (currentScrollLeft > maxScrollLeft) {
            grid.scrollTo({
                left: maxScrollLeft,
                behavior: 'smooth'
            });
        }
    });
}