// navbar
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
// end

// fade in herro
document.addEventListener('DOMContentLoaded', () => {
    // Animasi judul saat halaman dimuat
    const title = document.querySelector('.fade-in');
    setTimeout(() => {
        title.classList.add('appear');
    }, 300);
});
// end

// kata rotasi
const words = ["personal", "efektif", "menyenangkan"];
let index = 0;
const wordElement = document.getElementById("word-rotate");
setInterval(() => {
    // fade out
    wordElement.classList.add("fade-out");
    wordElement.classList.remove("fade-in");

    setTimeout(() => {
        // ganti kata
        index = (index + 1) % words.length;
        wordElement.textContent = words[index];

        // fade in
        wordElement.classList.remove("fade-out");
        wordElement.classList.add("fade-in");
    }, 400);

}, 2500);
// end

// hitung jumlah data
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.5 // Animasi mulai saat 50% kartu terlihat
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // Total durasi animasi (2 detik)
                const startTime = performance.now();

                const updateNumber = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);

                    // Menggunakan easing 'outQuad' agar melambat di akhir (lebih halus)
                    const currentCount = Math.floor(progress * target);

                    counter.innerText = currentCount;

                    if (progress < 1) {
                        requestAnimationFrame(updateNumber);
                    } else {
                        counter.innerText = target;
                    }
                };

                requestAnimationFrame(updateNumber);
                observer.unobserve(counter); // Berhenti memantau setelah animasi selesai
            }
        });
    }, observerOptions);

    // Daftarkan semua elemen .counter ke observer
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
