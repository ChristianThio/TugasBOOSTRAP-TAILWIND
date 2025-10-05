// Data cuaca sederhana (dummy)
const dataCuaca = {
  samarinda: { suhu: 30, kondisi: "Cerah" },
  balikpapan: { suhu: 28, kondisi: "Berawan" },
  jakarta: { suhu: 32, kondisi: "Panas Terik" },
  bandung: { suhu: 24, kondisi: "Hujan Ringan" },
  surabaya: { suhu: 33, kondisi: "Panas" }
};

// Saat tombol diklik
document.getElementById("checkWeatherBtn").addEventListener("click", () => {
  const cityInput = document.getElementById("cityInput").value.toLowerCase();

  if (cityInput === "") {
    console.log("⚠️ Silakan masukkan nama kota terlebih dahulu!");
    return;
  }

  const cuaca = dataCuaca[cityInput];

  if (cuaca) {
    console.log("=== Informasi Cuaca ===");
    console.log(`🌆 Kota: ${cityInput.charAt(0).toUpperCase() + cityInput.slice(1)}`);
    console.log(`🌡️ Suhu: ${cuaca.suhu}°C`);
    console.log(`🌤️ Kondisi: ${cuaca.kondisi}`);
    console.log("========================");
  } else {
    console.log("❌ Data cuaca untuk kota tersebut belum tersedia.");
  }
});
