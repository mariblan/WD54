// You can work here or download the template!
// 1. Define a variable temperature and set it to any integer to represent the temperature in degrees Celsius.

// 2. Use if/else to advise wearing a coat if the temperature is below 15 degrees.

// 3. Use if/else if/else to give advice based on three temperature ranges:
// 3.1. Below 15 degrees: suggest a coat.
// 3.2. Between 15 and 25 degrees: suggest a sweater.
// 3.3. Above 25 degrees: suggest a t-shirt.

// 4.Use a switch statement to provide advice based on specific temperatures (just a few for example): 10, 20, and 30 degrees.

// 5. Print the results for each task to the console.
let temperature = 25;

if(temperature < 15) {
    console.log("wEAR A COAT PLEASE.")
}else{
    console.log("Nice day, go out.");
}

// ternary conditional
temperature < 15 ? console.log("wEAR A COAT PLEASE.") : console.log("Nice day, go out.");



if(temperature < 15 ){
    console.log("its below 15 degrees");
} else if (temperature >= 15 && temperature <= 25){
    console.log("its between 15 and 25");
} else {
    console.log("its above 25 wear a tshirt");
}