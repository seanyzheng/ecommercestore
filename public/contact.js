(function() {
    "use strict";

    function init() {
        const form = document.getElementById("contact-form");
        form.addEventListener("submit", submitForm);
    }

    async function submitForm(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        const response = await fetch("/submit-feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const result = await response.json();
            alert("Feedback submitted successfully");
            form.reset();
        } else {
            alert("Failed to submit feedback");
        }
    }
    init();
})();