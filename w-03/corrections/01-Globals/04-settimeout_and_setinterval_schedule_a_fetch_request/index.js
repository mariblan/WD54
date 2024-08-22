// You can work here or download the template

// Instructions:
// Create a variable counter and set it to 1.
// Use setInterval to schedule a fetch request to the Pokémon API every second.
// The fetch request URL should be https://pokeapi.co/api/v2/pokemon/ followed by the current value of counter.
// Fetch the data and extract the Pokémon's name and ID.
// Output an object with the Pokémon's name and ID to the console.
// Increment the counter after each fetch request.
// Stop the interval after 150 requests. We only want the OG Pokémon! :D

let counter =1;
const intervalTime = 1000; // 1000 milliseconds = 1 second

const maxRequests = 150;
const intervalId = setInterval(() => {
if (counter > maxRequests) {
clearInterval(intervalId);
console.log("Completed fetching the original 150 Pokémon.");
return;
}

const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;



fetch(url)
.then(response => {
    // if (!response.ok) {
    // throw new Error(`HTTP error! status: ${response.status}`);
    // }
    return response.json();
})
.then(data => {
    const pokemon = {
    name: data.name,
    id: data.id
    };
    console.log(pokemon);
})
.catch(error => {
    console.error('Error fetching Pokémon:', error);
});

counter++;
}, intervalTime);