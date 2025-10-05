function ubahKonten() {
    const judul = document.getElementById("judul");
    const paragraf = document.getElementById("paragraf");

    judul.textContent = "Judul Berubah!";
    paragraf.textContent = "Teks ini sudah diubah setelah klik tombol.";

    judul.style.color = "green";
    paragraf.style.color = "blue";
    paragraf.style.backgroundColor = "yellow";
    paragraf.style.fontWeight = "bold";

    console.log("Konten berhasil diubah!");
}

function resetKonten() {
    const judul = document.getElementById("judul");
    const paragraf = document.getElementById("paragraf");

    judul.textContent = "Judul Asli";
    paragraf.textContent = "Ini adalah teks awal paragraf.";

    judul.style.color = "black";
    paragraf.style.color = "black";
    paragraf.style.backgroundColor = "transparent";
    paragraf.style.fontWeight = "normal";

    console.log("Konten berhasil di-reset!");
}