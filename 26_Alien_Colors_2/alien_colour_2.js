"use strict";
// Choose a color for an alien as you did in Exercise 25.
let alien_colour = 'green';
//  write an if-else chain.
//if the alien colours is green.
// print a statement that the player just earned 5 points for shooting the alien.
if (alien_colour === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alien_colour = 'yellow';
if (alien_colour === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
