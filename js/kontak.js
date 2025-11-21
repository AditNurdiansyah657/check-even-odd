// KONTAK 
function kirimAnonim(event) {
    event.preventDefault();
    var isi = document.getElementById('kritikSaran').value.trim();
    if(isi) {
        document.getElementById('pesanAnonim').textContent = 'Terima kasih atas kritik & saran Anda!';
        document.getElementById('formAnonim').reset();
    } else {
        document.getElementById('pesanAnonim').textContent = '';
    }
    return false;
}