
 


// -------------- FUNCTION SHOPPING CART ----------------
  function addToCart(productId) {
    var product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }

  // Function to update cart display
  function updateCart() {
    $('#cartCount').text(cart.length);
  }

  // Function to handle checkout
  function checkout() {
    // Calculate total price
    var totalPrice = cart.reduce((total, product) => total + product.price, 0);
    $('#checkoutMessage').text('Total Price: Rp ' + totalPrice.toLocaleString());
    $('#checkoutModal').modal('show');


  // Display products
  displayProducts();

  // Handle checkout button click
  $('#checkoutBtn').click(checkout);
}


