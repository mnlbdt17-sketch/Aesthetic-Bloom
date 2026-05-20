document.addEventListener("DOMContentLoaded", function () {
    
    // === 1. TOMBOL + TAMBAH (SUDAH AMAN) ===
    const tombolTambah = document.querySelectorAll(".btn-tambah");
    tombolTambah.forEach((tombol) => {
        tombol.addEventListener("click", function (e) {
            e.preventDefault();
            const teksAwal = this.innerText;
            this.innerText = "✅ Sukses";
            this.style.backgroundColor = "#D4E9B4";
            this.style.color = "#5D4037";
            this.style.transform = "scale(0.95)";
            this.disabled = true;

            setTimeout(() => {
                this.innerText = teksAwal;
                this.style.backgroundColor = "#FFB7C5";
                this.style.color = "white";
                this.style.transform = "none";
                this.disabled = false;
            }, 1200);
        });
    });

    // === 2. PERBAIKAN ANTI-LOMPAT UNTUK FORM KONTAK ===
    const formKontak = document.getElementById("form-kontak");
    const pesanSukses = document.getElementById("pesan-sukses");

    if (formKontak) {
        // Kita kunci event 'submit' pada form-nya langsung, ini cara paling ampuh menahan reload/lompat
        formKontak.addEventListener("submit", function (e) {
            // STOP! Jangan biarkan browser me-refresh atau melompat ke atas
            e.preventDefault(); 

            // Munculkan tulisan sukses bawaan HTML kamu
            if (pesanSukses) {
                pesanSukses.style.display = "block";
                pesanSukses.style.backgroundColor = "#f0cbec"; 
                pesanSukses.style.color = "#5D4037";
                pesanSukses.style.padding = "24px";
                pesanSukses.style.borderRadius = "8px";
                pesanSukses.style.marginTop = "15px";
                pesanSukses.style.textAlign = "center";
                pesanSukses.style.fontWeight = "600";
            }

            // Kosongkan kolom input (Nama, WA, Pesan) secara rapi
            formKontak.reset();

            // Hilangkan lagi tulisan sukses setelah 4 detik secara otomatis
            setTimeout(() => {
                if (pesanSukses) {
                    pesanSukses.style.display = "none";
                }
            }, 4000);
        });
    }
});