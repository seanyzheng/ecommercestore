(function() {
    "use strict";
    function init() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        if (!id) {
            window.location.href = "/index.html";
        }
        fetchProduct(id);
        qs("#back-btn").addEventListener("click", function() {
            window.location.href = "/index.html";
        });

    }

    async function fetchProduct(id) {
        let url = "/products/" + id;
        try {
            let resp = await fetch(url);
            let data = await resp.json();
            displayProductDetails(data);
        } catch (err) {
            handleError(err);
        }
    }

    function displayProductDetails(product) {
        let main = qs("main");
        let name = gen("h1");
        name.textContent = product.name;
        main.appendChild(name);
        let img = gen("img");
        img.src = "/" + product.image;
        img.alt = product.name;
        main.appendChild(img);
        let price = gen("p");
        price.textContent = "$" + product.price;
        main.appendChild(price);
        let quantity = gen("p");
        quantity.textContent = "Quantity: " + product.quantity;
        main.appendChild(quantity);
        let conditon = gen("p");
        conditon.textContent = "Condition: " + product.condition;
        main.appendChild(conditon);
        let yearsUsed = gen("p");
        yearsUsed.textContent = "Years Used: " + product.yearsUsed;
        main.appendChild(yearsUsed);
        let description = gen("p");
        description.textContent = product.description;
        main.appendChild(description);
        let buyBtn = gen("button");
        buyBtn.textContent = "Add to Cart";
        buyBtn.addEventListener("click", function() {
            addToCart(product);
        });
        main.appendChild(buyBtn);
    }

    function addToCart(product) {
        let cart = getCart();
        if (product.quantity > 0) {
            let existingProduct = cart.find(p => p.id === product.id);
            if (existingProduct) {
                existingProduct.cartQuantity++;
            } else {
                product.cartQuantity = 1;
                cart.push(product);
            }
            product.quantity -= 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Item successfully added to cart");
        } else {
            alert("Item out of stock");
        }
    }
    init();
})();