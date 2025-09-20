Tujuan
Project ini adalah implementasi halaman profil Instagram sederhana menggunakan Bootstrap 5. Fokus pada sistem grid Bootstrap (container → row → col), layout responsif, dan pemanfaatan fitur grid lanjutan (col-, order-, offset, nesting).
Struktur Halaman
Header Profil → Foto profil, username, tombol interaksi.
Bio & Statistik → Jumlah post, follower, following.
Highlight Story → Story profil dengan lingkaran.
Feed Foto → Minimal 12 foto, dengan sistem grid responsif.
Footer → Navigasi tambahan (Meta, Privacy, dsb).
Keputusan Grid di Tiap Breakpoint
Feed Foto (col-*)
Mobile (≤576px / col-12)
→ 1 kolom penuh. Tujuannya supaya foto tidak terlalu kecil dan tetap nyaman dilihat di layar kecil.
Tablet (≥768px / col-md-6 atau col-md-4)
→ 2–3 kolom. Foto terlihat lebih padat, tetapi masih cukup besar untuk interaksi.
Desktop (≥992px / col-lg-3)
→ 4 kolom rapi dan seimbang, menyerupai grid Instagram versi web.
Kenapa begitu?
Grid 1 kolom di mobile → user fokus ke satu konten per scroll.
Grid 2–3 kolom di tablet → balance antara density dan keterbacaan.
Grid 4 kolom di desktop → maksimal efisiensi layar lebar tanpa membuat foto terlalu kecil.
Pendekatan Tombol Follow / Edit Profile di Mobile
Masalah: di layar kecil, tombol bisa menumpuk dengan username dan icon setting.
Pendekatan dengan Bootstrap utilities:
Gunakan order-1 order-md-2 → di mobile tombol muncul di bawah username (lebih mudah dijangkau dengan ibu jari).
Di desktop, tombol pindah ke samping username untuk tampilan profesional.
Tambahkan btn-sm di mobile → tombol kecil dan rapi, tidak makan banyak ruang.
Hasil: Tombol tetap mudah dijangkau & tidak berdesakan di layar kecil.
Jika Postingan Bertambah Jadi 50
Potensi Masalah:
Grid semakin panjang → user harus scroll terlalu jauh.
Loading gambar jadi lebih berat → memperlambat performa.
Layout bisa terasa “penuh” jika tidak ada pagination.
Solusi dengan Grid Bootstrap:
Grid tetap responsif otomatis (col-12 col-md-6 col-lg-3) → meskipun jumlah foto bertambah, alignment dan kerapihan tetap terjaga.
Bisa gunakan pagination / infinite scroll agar feed tidak terlalu berat.
Jika ingin lebih padat, di desktop bisa ubah ke col-lg-2 → 6 kolom untuk layar besar.
