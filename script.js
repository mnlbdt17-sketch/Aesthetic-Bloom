document.addEventListener("DOMContentLoaded", function () {
    
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

    const formKontak = document.getElementById("form-kontak");
    const pesanSukses = document.getElementById("pesan-sukses");

    if (formKontak) {
        formKontak.addEventListener("submit", function (e) {
            e.preventDefault(); 

            if (pesanSukses) {
                pesanSukses.style.display = "block";
                pesanSukses.style.backgroundColor = "#f0cbec"; 
                pesanSukses.style.color = "#5D4037";
                pesanSukses.style.padding = "12px";
                pesanSukses.style.borderRadius = "8px";
                pesanSukses.style.marginTop = "15px";
                pesanSukses.style.textAlign = "center";
                pesanSukses.style.fontWeight = "600";
            }

            formKontak.reset();

            setTimeout(() => {
                if (pesanSukses) {
                    pesanSukses.style.display = "none";
                }
            }, 4000);
        });
    }
});