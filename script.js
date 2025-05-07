document.getElementById("reset").addEventListener("click", function() {
    location.reload()
})

// Ganjil - Genap //

function cekAngka(number) {
    const result = document.getElementById("result");

    result.className = "";

    if(isNaN(number)) {
        result.textContent = "Silahkan Masukkan Angka";
        result.classList.add("result-error");
    } else if(number % 2 === 0) {
        result.textContent = "Angka Genap";
        result.classList.add("result-genap");
    } else {
        result.textContent = "Angka Ganjil";
        result.classList.add("result-ganjil");
    }
}

document.getElementById("cekBtn").addEventListener("click", function() {
    const input = document.getElementById("number").value;
    const number = parseInt(input.trim());
    cekAngka(number);
})

// // Ganjil - Genap // //


// Tebak Angka //

let angkaBenar = Math.floor(Math.random() * 10) + 1;
console.log("Angka yang benar adalah: " + angkaBenar)

document.getElementById("cek").addEventListener("click", function() {
    const tebak = parseInt(document.getElementById("tebakAngka").value);
    const hasil = document.getElementById("hasil")

    if(isNaN(tebak)) {
        hasil.textContent = "Masukkan Angka di antara 1 - 10"
        hasil.classList.add("hasil-error")
    } else if(tebak === angkaBenar) {
        hasil.textContent = "Tebakan Anda Benar"
        hasil.classList.add("hasil-benar")
    } else {
        hasil.textContent = "Tebakan Anda Salah"
        hasil.classList.add("hasil-salah")
    }
})

// // Tebak Angka // // 


// Status Usia //

document.getElementById("cekAh").addEventListener("click", function() {
    const status = parseInt(document.getElementById("status").value);
    const jawaban = document.getElementById("jawaban");

    if(isNaN(status)) {
        jawaban.textContent = "Masukkan Umur Anda"
        jawaban.classList.add("jawaban-3")
    } else if(status <= 2) {
        jawaban.textContent = "Masih Balita"
        jawaban.classList.add("jawaban-2")
    } else if(status <= 13) {
        jawaban.textContent = "Anak - anak"
        jawaban.classList.add("jawaban-2")
    } else if(status <= 25) {
        jawaban.textContent = "Sudah Remaja"
        jawaban.classList.add("jawaban-SR")
    } else if(status <= 50) {
        jawaban.textContent = "Dewasa"
        jawaban.classList.add("jawaban-1")
    } else if(status <= 1000) {
        jawaban.textContent = "Lansia"
        jawaban.classList.add("jawaban-L")
    } else {
        jawaban.textContent = "Panjang Umur"
        jawaban.classList.add("jawaban-PU")
    }
})

// // Status Usia // //