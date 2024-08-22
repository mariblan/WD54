// You can work here or download the template

// Instructions:
// Use setTimeout to schedule the creation of a promotion message after 3 seconds.
// Create a new DOM element (e.g., a <div>) for the promotion message.
// Add some text to the promotion message, like "Special Offer: Get 20% off your next purchase!".
// Use Tailwind CSS to style the message with a background color, padding, rounded corners, and centered text.
// Append the new element to the message-container div.
const container = document.getElementById("message-container");
const div = document.createElement('div');
const h3 = document.createElement("h3");
h3.textContent = "Special Offer: Get 20% off your next purchase!";

div.classList.add("bg-blue-600", "p-2", "rounded", "text-center");

const newOffer = () =>{
    div.appendChild(h3);
    container.appendChild(div);
    console.log("New offer");

}

setTimeout(newOffer,3000);