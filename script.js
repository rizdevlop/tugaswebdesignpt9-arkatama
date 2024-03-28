document.addEventListener("DOMContentLoaded", function() {
    // Menangkap semua elemen anchor di navbar
    const links = document.querySelectorAll(".navbar a");

    // Loop melalui setiap link
    links.forEach(link => {
        // Mencegah default action (pindah ke anchor) ketika link diklik
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Mendapatkan id target (berdasarkan href attribute) dari link
            const targetId = this.getAttribute("href").substring(1);

            // Mendapatkan elemen target berdasarkan id
            const targetElement = document.getElementById(targetId);

            // Menggunakan fungsi scrollIntoView untuk melakukan smooth scroll ke elemen target
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
// Tentukan waktu perpindahan gambar dalam milidetik
const interval = 2500; // misalnya setiap 2.5 detik

// Ambil semua gambar dari elemen dengan kelas 'about-image'
const images = document.querySelectorAll('.about-image img');

// Inisialisasi indeks gambar saat ini
let currentImageIndex = 0;

// Fungsi untuk mengubah gambar yang sedang ditampilkan
function changeImage() {
  // Hilangkan kelas 'active' dari gambar saat ini
  images[currentImageIndex].classList.remove('active');

  // Tambahkan kelas 'active' ke gambar berikutnya
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

// Panggil fungsi changeImage setiap interval waktu
setInterval(changeImage, interval);
});

document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua tautan navbar
    const navLinks = document.querySelectorAll('.navbar a');

    // Tambahkan event listener untuk setiap tautan navbar
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Cegah perilaku default dari tautan
            event.preventDefault();
            
            // Ambil id dari bagian target yang diarahkan oleh tautan
            const targetId = link.getAttribute('href').substring(1);
            
            // Cari elemen dengan id yang sesuai
            const targetElement = document.getElementById(targetId);
            
            // Gulir halaman ke elemen target dengan efek smooth
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// DOM JAVASCRIPT
var links = document.querySelectorAll(".navbar a");

// Menambahkan event listener untuk setiap elemen anchor
links.forEach(function(link) {
    link.addEventListener("mouseover", function() {
        this.style.color = "#c40094"; // Mengubah warna saat mouse diarahkan
    });

    link.addEventListener("mouseout", function() {
        this.style.color = ""; // Mengembalikan warna saat mouse meninggalkan link
    });
});

// Mengambil elemen tombol dengan class "start-btn"
var startBtn = document.querySelector(".start-btn");

// Menambahkan event listener untuk saat mouse masuk
startBtn.addEventListener("mouseover", function() {
    this.style.background = "#c40094"; // Mengubah warna latar belakang saat mouse diarahkan
    this.style.boxShadow = "none"; // Menghilangkan shadow saat mouse diarahkan
});

// Menambahkan event listener untuk saat mouse keluar
startBtn.addEventListener("mouseout", function() {
    this.style.background = ""; // Mengembalikan warna latar belakang saat mouse meninggalkan tombol
    this.style.boxShadow = ""; // Mengembalikan shadow saat mouse meninggalkan tombol
});

// Membuat elemen footer
var footer = document.createElement("footer");
footer.classList.add("footer");

// Membuat elemen div untuk footer-container
var footerContainer = document.createElement("div");
footerContainer.classList.add("footer-container");

// Membuat elemen div untuk footer-item Kontak
var kontakDiv = document.createElement("div");
kontakDiv.classList.add("footer-item");

// Menambahkan elemen h3 untuk kontak
var kontakH3 = document.createElement("h3");
kontakH3.textContent = "Kontak";

// Menambahkan elemen p untuk email dan telepon
var emailP = document.createElement("p");
emailP.textContent = "Email: rizqiaahya@gmail.com";

var teleponP = document.createElement("p");
teleponP.textContent = "Telepon: 0877-4387-5391";

// Menggabungkan elemen h3, p (email), dan p (telepon) ke dalam div kontak
kontakDiv.appendChild(kontakH3);
kontakDiv.appendChild(emailP);
kontakDiv.appendChild(teleponP);

// Membuat elemen div untuk footer-item Ngampel Blora
var ngampelDiv = document.createElement("div");
ngampelDiv.classList.add("footer-item");

// Menambahkan elemen h3 untuk Ngampel Blora
var ngampelH3 = document.createElement("h3");
ngampelH3.textContent = "Ngampel Blora";

// Menambahkan elemen p untuk alamat Ngampel Blora
var alamatP = document.createElement("p");
alamatP.textContent = "Jalan Raya Rembang-Blora Km 16";

var kotaP = document.createElement("p");
kotaP.textContent = "Kota Blora";

// Menggabungkan elemen h3, p (alamat), dan p (kota) ke dalam div Ngampel Blora
ngampelDiv.appendChild(ngampelH3);
ngampelDiv.appendChild(alamatP);
ngampelDiv.appendChild(kotaP);

// Membuat elemen div untuk footer-item Ikuti Kami
var ikutiDiv = document.createElement("div");
ikutiDiv.classList.add("footer-item");

// Menambahkan elemen h3 untuk Ikuti Kami
var ikutiH3 = document.createElement("h3");
ikutiH3.textContent = "Ikuti Kami";

// Membuat elemen div untuk social-media-icons
var socialMediaDiv = document.createElement("div");
socialMediaDiv.classList.add("social-media-icons");

// Menggabungkan elemen h3 (Ikuti Kami) dan social-media-icons div ke dalam footer-item Ikuti Kami
ikutiDiv.appendChild(ikutiH3);
ikutiDiv.appendChild(socialMediaDiv);

// Menggabungkan semua elemen footer-item ke dalam footer-container
footerContainer.appendChild(kontakDiv);
footerContainer.appendChild(ngampelDiv);
footerContainer.appendChild(ikutiDiv);

// Membuat elemen p untuk copyright
var copyrightP = document.createElement("p");
copyrightP.classList.add("copyright");
copyrightP.textContent = "© 2024 RIZTECH. All rights reserved.";

// Menggabungkan footer-container dan copyright p ke dalam footer
footer.appendChild(footerContainer);
footer.appendChild(copyrightP);

// Mengambil elemen body dan menambahkan footer ke dalamnya
var body = document.querySelector("body");
body.appendChild(footer);
