/**
 * script.js
 * 
 * This script handles user interactions for the web page, including:
 * - Displaying a welcome prompt to get the user's nickname and updating the greeting.
 * - Handling the sending of a message via a form, validating input fields, and providing feedback.
 * 
 * Functions:
 * - welcomeSpeech(): Prompts the user for a nickname and updates the greeting on the page.
 * - sendMessage(): Validates form fields (message, email, name), shows an alert with the message details, and clears the form.
 * 
 * Event Listeners:
 * - window.onload: Calls welcomeSpeech() when the page loads.
 */

console.log("Script loaded successfully");

// welcomeSpeech();

// call a function to welcome speech

/**
 * Prompts the user for their nickname and updates the greeting element.
 */
function welcomeSpeech() {
    let userName = prompt("What is your nickname?") 
    if (userName !='') {
        document.getElementById('user-greeting').textContent = userName;
    }
}
window.onload = welcomeSpeech;

/**
 * Handles sending a message from the form.
 * Validates that all fields are filled, shows an alert with the message details,
 * and clears the form fields.
 */
function sendMessage() {
    let message = document.getElementById('user-message').value;
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    if (message!='' && email!='' && name!='') {
        alert("Thank you, message sent: " + message + "\nFrom: " + name + "\nEmail: " + email);
        document.getElementById('user-message').value = '';
        document.getElementById('email').value = ''; 
        document.getElementById('name').value = '';
    
    } else {
        alert("Please enter a message before sending.");
    }
}