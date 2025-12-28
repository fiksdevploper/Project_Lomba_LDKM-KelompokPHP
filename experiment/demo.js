const cards = document.querySelectorAll('.card');
const grid = document.querySelector('.podcaster-grid');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Hapus class active dari kartu lain
        cards.forEach(c => c.classList.remove('active'));
        
        // Tambahkan ke kartu yang diklik
        card.classList.add('active');

        // Scroll kartu ke posisi tengah secara halus
        const offsetLeft = card.offsetLeft - (grid.clientWidth / 2) + (card.clientWidth / 2);
        grid.scrollTo({
            left: offsetLeft,
            behavior: 'smooth'
        });
    });
});

// Logika sederhana: Jika sudah di ujung kanan, geser kembali ke awal saat scroll manual
grid.addEventListener('scroll', () => {
    if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth) {
        // Opsional: berikan jeda lalu kembali ke awal
        // grid.scrollTo({ left: 0, behavior: 'smooth' });
    }
});