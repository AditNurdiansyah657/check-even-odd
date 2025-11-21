// PROGRAM UNTUK MEMERIKSA JENIS BILANGAN : MENENTUKKAN BILANGAN GANJIL ATAU GENAP 

function cekAngka() {
    const angka = document.getElementById('inputAngka').value;
    const hasil = document.getElementById('hasil');

    if (angka === '') {
        hasil.textContent = 'Tolong masukkan angka terlebih dahulu';
        return;
    }

    if (isNaN(angka)) {
        hasil.textContent = 'Invalid input. Tolong masukkan angka yang valid';
        return;
    }

    if (angka % 2 === 0) {
        hasil.textContent = `${angka} adalah angka Genap`;
    } else {
        hasil.textContent = `${angka} adalah angka Ganjil`;
    }
}