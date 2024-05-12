"use strict";
// Define a function with a rest parameter that accept items argument representing our 
function make_sandwich(...items) {
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy sandwitch ");
}
//Call the function 3 times with 3 different number of arguments
make_sandwich("Chiken", "Cheese", "Mayo", "Egg");
make_sandwich("Bread", "Butter");
make_sandwich("Braed", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuse", "Tomato");
