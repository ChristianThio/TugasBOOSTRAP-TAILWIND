function runExercises() {
    console.clear();

    const universitas = "Universitas Muhammadiyah Kalimantan Timur";
    console.log("Nama Universitas:", universitas);

    let jumlahMahasiswa = 25;
    jumlahMahasiswa = jumlahMahasiswa + 5;
    console.log("Jumlah Mahasiswa Sekarang:", jumlahMahasiswa);

    const namaLengkap = "Ahmad Zulfandi";
    console.log("Halo, kata saya: " + namaLengkap);

    let angka1 = 10;
    let angka2 = 5;
    console.log("Hasil penjumlahan:", angka1 + angka2);
    console.log("Hasil pengurangan:", angka1 - angka2);
    console.log("Hasil perkalian:", angka1 * angka2);
    console.log("Hasil pembagian:", angka1 / angka2);

    let nilaiUjian = 80;
    let lulus = nilaiUjian >= 75;
    console.log("Apakah lulus?", lulus);
}