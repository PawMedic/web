$(document).ready(function () {
    // Menambahkan event click pada elemen dengan class "services_title"
    $(".chat_title").on("mouseenter", function () {
        $(".chat_title").css('color', 'red');
    });
    $(".chat_title").on("mouseleave", function () {
        $(".chat_title").css('color', 'black');
        // Tindakan yang akan dijalankan saat "Jadwalkan Janji Temu" ditekan
        // alert("Anda telah memilih untuk jadwalkan janji temu. Silakan hubungi kami untuk informasi lebih lanjut.");
        // Atau Anda bisa menambahkan logika atau tindakan lainnya sesuai kebutuhan.
    });
});

$(document).ready(function () {
    // Menangani event klik pada tulisan "Jadwalkan Janji Temu"
    $("#chatLink").on("click", function () {
        // Mengarahkan pengguna ke halaman formulir
        window.location.href = "chat.html";
    });
});
$(document).ready(function () {
    // Sample data (you can replace it with your actual product data)
    var doctor = [
        { name: "Dr. Mike Jonathan", detail: "Spesialis Anjing", price: "50.000", Image: "img/dokter1.png" },
        { name: "Dr. Felixha Poetry", detail: "Spesialis Kesehatan Hewan", price: "75.000", Image: "img/dokter3.png" }
    ];

    // Loop through the products array and create product cards
    $.each(doctor, function (index, doctor) {
        var doctorCard = `
          <div class="col-md-3 mb-3">
            <div class="card">
              <img src="${doctor.Image}" alt="${doctor.name}">
              <div class="card-body">
                <h5 class="card-title">${doctor.name}</h5>
                <p class="card-text">${doctor.detail}</p>
                <p class="card-text"> Rp ${doctor.price}</p>
                <button class="btn btn-primary" onclick="redirectToChat('${doctor.name}')">Chat Now</button>
                </div>
              </div>
            </div>
          </div>
        `;
        $('#doctor-list').append(doctorCard);
    });
     // Function to redirect to chat page
     function redirectToChat(doctorName) {
      // Simulate delay before redirecting
      setTimeout(function() {
          // Redirect to chat page with doctor name as query parameter
          window.location.href = "chat.html?doctor=" + encodeURIComponent(doctorName);
      }, 500);
  }
});