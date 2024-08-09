// You can work here or download the template
// 1. Select Elements and Log to Console:
// 1.1. Select the h1 element inside the .hero-content div and log it to the console.
// 1.2. Select all the a elements inside the .nav-list and log them to the console.
// 1.3. Select the .btn element and log it to the console.

// Select the first element with the class 'hero-content'
const div = document.querySelector(".hero-content");

// Select the first <h1> element in the document
const h1 = document.querySelector("h1");

// Select the element with the class 'nav-list'
const navList = document.querySelector(".nav-list");

// Select all <a> elements within the navList
const a = navList.querySelectorAll("a");

// Select the element with the class 'btn'
const button = document.querySelector(".btn");

// 2. Modify Styles:
// 2.1. Change the background color of the .header element to #b5651d.
// 2.2. Change the font size of the h1 element inside the .hero-content div to 3rem.
// 2.3. Change the text color of all a elements inside the .nav-list to #faf0e6.
// Set the background color of the header to a specific color
const header = document.querySelector(".header");
const headerColor = header.style.backgroundColor = "#b5651d";

// Set the font size of the <h1> element
const fontSize = h1.style.fontSize = "3rem";

// Change the text color of all <a> elements within navList
a.forEach(link => {
    link.style.color = "#faf0e6";
});

// 3. Add Content:
// 3.1. Select the .hero-content div and add a new p element with the text "Open daily from 7 AM to 9 PM." inside it.

// Create a new <p> element
const newPText = document.createElement("p");
// Set the inner HTML of the new <p> element
newPText.innerHTML = "Open daily from 7 AM to 9 PM.";

// Append the new <p> element to the div with class 'hero-content'
div.appendChild(newPText);

// Log the <h1> element to the console
console.log(h1);
// Log all <a> elements within navList to the console
console.log(a);
// Log the button element to the console
console.log(button);