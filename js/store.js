$(document).ready(function () {
    // Menambahkan event click pada elemen dengan class "services_title"
    $(".store_title").on("mouseenter", function () {
        $(".store_title").css('color', 'red');
    });
    $(".store_title").on("mouseleave", function () {
        $(".store_title").css('color', 'black');
        // Tindakan yang akan dijalankan saat "Jadwalkan Janji Temu" ditekan
        // alert("Anda telah memilih untuk jadwalkan janji temu. Silakan hubungi kami untuk informasi lebih lanjut.");
        // Atau Anda bisa menambahkan logika atau tindakan lainnya sesuai kebutuhan.
    });
});

$(document).ready(function () {
    // Menangani event klik pada tulisan "Jadwalkan Janji Temu"
    $("#storeLink").on("click", function () {
        // Mengarahkan pengguna ke halaman formulir
        window.location.href = "store.html";

    });
});

$(document).ready(function () {
    // Sample data (you can replace it with your actual product data)
    var products = [
        { name: "Doxycycline", price: "150.000", Image: "img/obatpaw1.png" },
        { name: "Prednisone", price: "90.000", Image: "img/obatpaw2.png" },
        { name: "Baytril", price: "30.000", Image: "img/obatpaw3.png" },
        { name: "Tetracycline", price: "40.000", Image: "img/obatpaw4.png" },
        { name: "Makrolida", price: "50.000", Image: "img/obatpaw5.png" },
        { name: "Sulfalazine", price: "20.000", Image: "img/obatpaw6.png" },
        { name: "Cefadroxil", price: "30.000", Image: "img/obatpaw7.png" }
    ];

    // Loop through the products array and create product cards
    $.each(products, function (index, product) {
        var productCard = `
          <div class="col-md-3 mb-3">
            <div class="card">
              <img src="${product.Image}" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: Rp ${product.price}</p>
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        `;
        $('#product-list').append(productCard);
    });
});