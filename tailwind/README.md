Tujuan
Project ini adalah implementasi halaman profil Instagram sederhana menggunakan Tailwind CSS. Fokus utama ada pada layout responsif, sistem grid untuk feed foto, dan pemanfaatan utility classes untuk mobile-first design.
Struktur Halaman
Header Profil → Foto profil, username, tombol interaksi.
Bio & Statistik → Jumlah post, follower, following.
Highlight Story → Story profil dengan lingkaran.
Feed Foto → Minimal 12 foto, dengan grid responsif.
Footer → Navigasi tambahan (Meta, Privacy, dsb).
Keputusan Grid & Gap
Feed Foto (grid-cols-* gap-*)
Mobile (≤640px / grid-cols-1)
→ 1 kolom penuh agar foto tidak terlalu kecil.
Tablet (≥768px / sm:grid-cols-2 md:grid-cols-3)
→ 2–3 kolom, sesuai lebar layar. Foto tetap proporsional tanpa terlihat “gepeng”.
Desktop (≥992px / lg:grid-cols-4)
→ 4 kolom, tampilan padat dan simetris, mirip Instagram asli.
Gap (gap-1)
→ Jarak antar foto tipis (4px), agar nuansa grid Instagram tetap rapat dan fokus ke konten.
Kesimpulan:
Grid diatur agar mobile nyaman (besar & jelas), tablet seimbang (2–3 kolom), dan desktop optimal (4 kolom rapi).
Responsive Utilities untuk Mobile
Masalah utama: layout profil berdesakan di layar kecil.
Solusi dengan Tailwind responsive classes:
Foto Profil & Info
flex-col md:flex-row → di mobile ditumpuk, di desktop sejajar.
Tombol Interaksi (Edit Profil, Arsip)
order-2 md:order-1 → di mobile tombol muncul di bawah username, tapi di desktop pindah ke samping username.
Text Alignment
text-center md:text-left → di mobile teks rata tengah (lebih mudah dibaca), di desktop rata kiri (lebih profesional).
Hasil: Layout fleksibel tanpa CSS tambahan, cukup dengan utility Tailwind.
Trade-off: Utility Classes vs Component CSS
Utility Classes (cara Tailwind murni)
Cepat & fleksibel (langsung di HTML).
Konsisten (pakai sistem spacing/warna Tailwind).
Cocok untuk layout unik (seperti halaman profil ini).
Kekurangan Utility Classes
HTML jadi panjang & “berisik”.
Style berulang harus diketik ulang (copas).
Component CSS (misalnya .profile-header {…})
HTML lebih bersih (cukup panggil 1 class).
Lebih efisien kalau dipakai di banyak halaman.
Kekurangan Component CSS
Butuh file CSS tambahan.
Bisa lepas dari sistem desain Tailwind → rawan inkonsistensi.
Kesimpulan:
Gunakan utility classes untuk layout unik & cepat.
Gunakan component CSS bila pattern sering dipakai ulang.
