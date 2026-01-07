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
const colors = ["#3D9CFB", "#5CCAA0", "#B79AF2", "#ECEE8C"];
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

    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

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

// swrrt alert
const kuisGayaBelajar = [
    {
        tanya: "Saat menghafal sesuatu, apa yang biasanya kamu lakukan?",
        opsi: {
            V: "Membayangkan gambar atau tulisan dalam pikiran",
            A: "Mengucapkan kata-kata keras-keras",
            K: "Menulisnya berkali-kali di kertas"
        }
    },
    {
        tanya: "Apa yang paling mengganggumu saat sedang konsentrasi?",
        opsi: {
            V: "Suasana yang berantakan atau kotor",
            A: "Suara bising atau orang mengobrol",
            K: "Harus duduk diam terlalu lama"
        }
    },
    {
        tanya: "Jika harus merakit mainan baru, kamu lebih suka...",
        opsi: {
            V: "Melihat gambar petunjuknya dulu",
            A: "Mendengarkan penjelasan orang lain",
            K: "Langsung mencoba memasang bagian-bagiannya"
        }
    }
];

document.getElementById('cta-button').addEventListener('click', async function() {
    let poin = { V: 0, A: 0, K: 0 };

    for (let i = 0; i < kuisGayaBelajar.length; i++) {
        const { value: answer } = await Swal.fire({
            title: `Pertanyaan ${i + 1}`,
            text: kuisGayaBelajar[i].tanya,
            input: 'radio',
            inputOptions: kuisGayaBelajar[i].opsi,
            
            // PENGATURAN TOMBOL DI DALAM SWEETALERT
            confirmButtonText: 'Lanjut',
            confirmButtonColor: '#3D9CFB', // Biru yang Anda minta
            
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value) return 'Pilih salah satu jawaban!';
            },
            showClass: {
                popup: 'animate__animated animate__fadeInUp animate__faster'
            }
        });

        if (answer) poin[answer]++;
    }

    // Tentukan hasil tertinggi
    let hasil = Object.keys(poin).reduce((a, b) => poin[a] > poin[b] ? a : b);
    
    const deskripsi = {
        V: { judul: "Visual", teks: "Kamu lebih mudah belajar dengan melihat gambar atau diagram.", ikon: "👁️" },
        A: { judul: "Auditori", teks: "Kamu lebih mudah belajar melalui suara dan diskusi.", ikon: "🎧" },
        K: { judul: "Kinestetik", teks: "Kamu belajar lebih baik melalui praktik dan gerakan.", ikon: "🏃" }
    };

    // Pop-up Hasil Akhir
    Swal.fire({
        title: `Hasil: ${deskripsi[hasil].judul} ${deskripsi[hasil].ikon}`,
        text: deskripsi[hasil].teks,
        icon: 'success',
        confirmButtonText: 'Selesai',
        confirmButtonColor: '#3D9CFB', // Biru yang sama untuk konsistensi
        backdrop: `rgba(61, 156, 251, 0.2)`
    });
});

document.getElementById('playVideoButton').addEventListener('click', function () {
    Swal.fire({
        title: 'Animation vs. Coding',
        html: `
            <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:8px;">
                <iframe 
                    src="https://www.youtube.com/embed/EFmxPMdBqmU?autoplay=1" 
                    style="position:absolute; top:0; left:0; width:100%; height:100%;" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        `,
        width: 900,
        padding: '1em',
        background: '#fff',
        showCloseButton: true,
        showConfirmButton: false,
        focusConfirm: false,
    });
});

document.getElementById('btnAudioSimple').addEventListener('click', function () {
    Swal.fire({
        title: 'Gaya Belajar Audio',
        html: `
                    <p style="font-size: 14px; color: #636e72; margin-bottom: 25px;">
                        Klik tombol putar untuk mendengarkan materi.
                    </p>
                    <audio controls autoplay style="width: 100%;">
                        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
                        Browser Anda tidak mendukung audio.
                    </audio>
                `,
        showConfirmButton: false,
        showCloseButton: true,
        width: '380px',
        padding: '2.5em',
        background: '#ffffff',
        borderRadius: '20px'
    });
});

const kuisData = [
    {
        tanya: "Jika gelas = 'Kosong', lalu diberi instruksi gelas = 'Kopi', apa isi gelas sekarang?",
        opsi: ["Kosong", "Kopi", "Gelas Kopi"],
        jawaban: 1 
    },
    {
        tanya: "Manakah urutan algoritma yang benar?",
        opsi: ["Minum > Tuang air", "Tuang air > Minum", "Aduk > Tuang air"],
        jawaban: 1
    },
    {
        tanya: "Jika x = 5 dan y = 10, apakah (x > y)?",
        opsi: ["Ya", "Tidak", "Mungkin"],
        jawaban: 1
    }
];

document.getElementById('startQuiz').addEventListener('click', async function() {
    let skor = 0;

    for (let i = 0; i < kuisData.length; i++) {
        const { value: pilihan } = await Swal.fire({
            title: `Soal ${i + 1}/${kuisData.length}`,
            text: kuisData[i].tanya,
            input: 'radio',
            inputOptions: kuisData[i].opsi.reduce((obj, item, index) => {
                obj[index] = item;
                return obj;
            }, {}),
            inputValidator: (value) => {
                if (!value) return 'Pilih salah satu jawaban!';
            },
            showCancelButton: true,
            cancelButtonText: 'Berhenti',
            confirmButtonText: 'Lanjut',
            allowOutsideClick: false
        });

        if (pilihan === undefined) return; // Jika user klik cancel

        if (parseInt(pilihan) === kuisData[i].jawaban) {
            skor++;
        }
    }

    const nilaiAkhir = Math.round((skor / kuisData.length) * 100);
    Swal.fire({
        title: 'Hasil Praktik Kamu',
        html: `
            <div style="font-size: 20px;">
                Nilai: <b>${nilaiAkhir}</b> <br>
                Benar: ${skor} dari ${kuisData.length} soal
            </div>
        `,
        icon: nilaiAkhir >= 70 ? 'success' : 'warning',
        confirmButtonText: 'Selesai'
    });
});