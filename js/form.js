$(document).ready(function () {
    // Menambahkan event click pada elemen dengan class "services_title"
    $(".janji_title").on("mouseenter", function () {
        $(".janji_title").css('color', 'red');
    });
    $(".janji_title").on("mouseleave", function () {
        $(".janji_title").css('color', 'black');
        // Tindakan yang akan dijalankan saat "Jadwalkan Janji Temu" ditekan
        // alert("Anda telah memilih untuk jadwalkan janji temu. Silakan hubungi kami untuk informasi lebih lanjut.");
        // Atau Anda bisa menambahkan logika atau tindakan lainnya sesuai kebutuhan.
    });
});

$(document).ready(function(){
    // Menangani event klik pada tulisan "Jadwalkan Janji Temu"
    $("#jadwalLink").on("click", function(){
        // Mengarahkan pengguna ke halaman formulir
        window.location.href = "form.html";

    });
});

$(document).ready(function(){
    $("#appointmentForm").submit(function(event) {
        // Mencegah pengiriman formulir ke server
        event.preventDefault();
        
        // Memanggil fungsi ambilNilaiForm
        ambilNilaiForm();
        
        // Menampilkan notifikasi
        alert("Terima kasih! Janji temu Anda telah berhasil direkam.");
    });

    function ambilNilaiForm() {
        // Mengambil nilai dari inputan formulir menggunakan jQuery
        var nama = $("#name").val();
        var email = $("#email").val();
        var dokter = $("#doctor").val();
        var tanggal = $("#date").val();
        var waktu = $("#time").val();
        
        // Menampilkan nilai yang diambil di konsol
        console.log("Nama: " + nama);
        console.log("Email: " + email);
        console.log("Dokter: " + dokter);
        console.log("Tanggal Janji Temu: " + tanggal);
        console.log("Waktu Janji Temu: " + waktu);
        
        // Mengosongkan formulir
        $("#appointmentForm")[0].reset();
    }
});
