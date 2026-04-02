let products = [
    {
        id: 1,
        name: "Men T-Shirt",
        price: 799,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 2,
        name: "Women Dress",
        price: 1299,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 3,
        name: "Sneakers",
        price: 1999,
        image: "https://via.placeholder.com/200"
    }
];

let cartCount = 0;

function displayProducts() {
    let productList = document.getElementById("product-list");

    products.forEach(product => {
        productList.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card p-3 text-center">
                    <img src="${product.image}" class="card-img-top">
                    <h5 class="mt-2">${product.name}</h5>
                    <p>₹${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart()">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

displayProducts();
