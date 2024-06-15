(function() {
    "use strict";

    /**
     * makes request to the API to get the faq questions
     * and answers
     */
    async function init() {
        let url = "/faqs";
        try {
            let resp = await fetch(url);
            let data = await resp.json();
            console.log(data);
            populateFAQ(data);
        } catch (err) {
            handleError(err);
        }
    }

    /**
     * populates the FAQ section with the questions and answers
     * @param {object} data - the data from the API
     */
    function populateFAQ(data) {
        let faq = qs("#faq-sec");
        for (let i = 0; i < data.length; i++) {
            let question = gen("h2");
            question.textContent = data[i].question;
            faq.appendChild(question);

            let answer = gen("p");
            answer.textContent = data[i].answer;
            faq.appendChild(answer);
        }
    }
    init();

})();