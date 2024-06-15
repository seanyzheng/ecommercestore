(function () {
    function init() {
        let cart = getCart();
        let container = qs("#cart-container");
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let itemContainer = gen("div");
            let name = gen("h3");
            name.textContent = cart[i].name;
            itemContainer.appendChild(name);
            let img = gen("img");
            img.src = cart[i].image;
            img.alt = cart[i].name;
            itemContainer.appendChild(img);
            let price = gen("p");
            price.textContent = "$" + cart[i].price + " each";
            total += (cart[i].price * cart[i].cartQuantity);
            itemContainer.appendChild(price);
            let quantity = gen("p");
            quantity.textContent = "Quantity: " + cart[i].cartQuantity;
            itemContainer.appendChild(quantity);
            container.appendChild(itemContainer);
        }

        let main = qs("main");
        let totalDisplay = gen("h3");
        totalDisplay.textContent = "Total: $" + total;
        main.appendChild(totalDisplay);
        let buyBtn = gen("button");
        buyBtn.textContent = "Buy";
        buyBtn.addEventListener("click", function () {
            submitOrder(cart);
        });
        main.appendChild(buyBtn);
    }
    async function submitOrder(cart) {
        try {
            const response = await fetch('/submit-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ items: cart })
            });

            if (response.ok) {
                localStorage.removeItem('cart');
                alert('Order placed successfully!');
                window.location.href = '/index.html';
            } else {
                alert('Failed to place order. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to place order. Please try again.');
        }
    }
    init();
})();