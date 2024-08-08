function addToCart(productName, productPrice, quantityInputId) {
    const quantity = document.getElementById(quantityInputId).value;
    const totalPrice = productPrice * quantity;
    alert(`Produk ${productName} dengan jumlah ${quantity} dan total harga Rp. ${totalPrice} telah ditambahkan ke keranjang.`);
    // Di sini Anda dapat menambahkan logika untuk menambahkan produk ke keranjang belanja
}

function changeQuantity(productName, change) {
    const quantityInput = document.querySelector(`#quantity-${productName.replace(/\s+/g, '-')}`);
    let currentQuantity = parseInt(quantityInput.value, 10);
    currentQuantity += change;
    if (currentQuantity < 0) currentQuantity = 0; // Mulai dari 0
    quantityInput.value = currentQuantity;
}

function validateQuantity(input) {
    let value = parseInt(input.value, 10);
    if (isNaN(value) || value < 0) value = 0;
    input.value = value;
}

function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    let productFound = false;

    productCards.forEach(card => {
        const productName = card.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchInput)) {
            card.style.display = 'block';
            productFound = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!productFound) {
        alert("Produk tidak ditemukan.");
    }

}

document.getElementById('ad-video').addEventListener('mouseover', function() {
    this.currentTime = 14.9; 
    this.play();
});


document.getElementById('ad-video').addEventListener('mouseout', function() {
    this.pause();
    });
