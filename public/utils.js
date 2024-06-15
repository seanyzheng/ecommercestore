/**
 * CS 132
 * Provided global DOM accessor aliases.
 * These are the ONLY functions that should be global in your submissions.
 */

/**
 * Returns the first element that matches the given CSS selector.
 * @param {string} selector - CSS query selector string.
 * @returns {object} first element matching the selector in the DOM tree
 * (null if none)
 */
function qs(selector) {
    return document.querySelector(selector);
}

/**
 * Returns the array of elements that match the given CSS selector.
 * @param {string} selector - CSS query selector
 * @returns {object[]} array of DOM objects matching the query (empty if none).
 */
function qsa(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Returns a new element with the given tagName
 * @param {string} tagName - name of element to create and return
 * @returns {object} new DOM element with the given tagName (null if none)
 */
function gen(tagName) {
    return document.createElement(tagName);
}

/**
 * Checks the status of the response, throwing an Error if it has a non-200
 * status code, otherwise returning back the response.
 * @param {Response} Response object to check
 * @returns {Response} unmodified Response object if successful
 * @throws {Error} if Response has non-200 error code
 */
function checkStatus(response) {
if (!response.ok) {
    throw Error("Error in Request: " + response.statusText);
}
return response;
}

/**
 * Displays an error message on the page using the message given to the Error.
 * @param {Error} - error object with error message.
 */
function handleError(err) {
qs("#response").textContent = "Something went wrong: " + err.message;
}

/**
 * Returns the existing cart or initializes a new cart if none exists.
 * @returns {object[]} cart - array of product objects in the cart.
 */
function getCart() {
    let cart = localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(cart);
    } else {
        return [];
    }
}

