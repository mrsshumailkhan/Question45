"use strict";
// create a veriable called alien colour.
let alien_colour = 'green';
if (alien_colour === 'green') {
    console.log("Player just earned 5 points !");
}
//write 1 version of this programe that passes the if test  and another test fails.
alien_colour = 'Yellow';
//the version that fails will have no output.
if (alien_colour === 'green') {
    console.log("Player just earned 5 points !");
}
