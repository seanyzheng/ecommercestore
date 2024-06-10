(function() {
    "use strict";

    function init() {
        qs("#baseball-nav").addEventListener("click", function() {
            activate("baseball-sec");
        });
        qs("#basketball-nav").addEventListener("click", function() {
            activate("basketball-sec");
        });
        qs("#soccer-nav").addEventListener("click", function() {
            activate("soccer-sec");
        });
        qs("#golf-nav").addEventListener("click", function() {
            activate("golf-sec");
        });
    }

    function activate(id) {
        let main = qs("main");
        for (let i = 0; i < main.children.length; i++) {
            if (main.children[i].id === id) {
                main.children[i].classList.remove("hidden");
            } else {
            main.children[i].classList.add("hidden");
            }
        }
    }

    init();
})();