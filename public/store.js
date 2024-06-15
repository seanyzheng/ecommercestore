(function() {
    "use strict";

    function init() {
        fetchItems("baseball");
        fetchItems("basketball");
        fetchItems("football");
        fetchItems("golf");

        qs("#all-nav").addEventListener("click", function() {
            let container = qs("#view");
            for (let i = 0; i < container.children.length; i++) {
                container.children[i].classList.remove("hidden");
            }
        });

        qs("#baseball-nav").addEventListener("click", function() {
            activate("baseball-sec");
        });
        qs("#basketball-nav").addEventListener("click", function() {
            activate("basketball-sec");
        });
        qs("#football-nav").addEventListener("click", function() {
            activate("football-sec");
        });
        qs("#golf-nav").addEventListener("click", function() {
            activate("golf-sec");
        });
    }

    function activate(id) {
        let container = qs("#view");
        for (let i = 0; i < container.children.length; i++) {
            if (container.children[i].id === id) {
                container.children[i].classList.remove("hidden");
            } else {
            container.children[i].classList.add("hidden");
            }
        }
    }

    async function fetchItems(category) {
        let url = "/filtered-products/?category=" + category;
        try {
            let resp = await fetch(url);
            let data = await resp.json();
            populateItems(data, category);
        } catch (err) {
            handleError(err);
        }
    }

    function populateItems(data, category) {
        let sec = qs("#" + category + "-sec");
        for (let i = 0; i < data.length; i++) { 
            let item = gen("div");
            let name = gen("h2");
            name.textContent = data[i].name;
            item.appendChild(name);
            let img = gen("img");
            img.src = data[i].image;
            img.alt = data[i].name;
            item.appendChild(img);
            let price = gen("p");
            price.textContent = "$" + data[i].price;
            item.appendChild(price);
            let quantity = gen("p");
            quantity.textContent = "Quantity: " + data[i].quantity;
            item.appendChild(quantity);
            item.id = data[i].id;
            item.addEventListener("click", function() {
                window.location.href="/product-view.html/?id=" + data[i].id;
            })

            sec.appendChild(item);
        }
    }

    init();
})();