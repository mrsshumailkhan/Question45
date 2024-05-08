"use strict";
//  If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
// version 1 of the program.
let alienColour = 'green';
if (alienColour === "green") {
    console.log("Version 1:Player earned 5 points.");
}
else if (alienColour === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColour === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.group("please select right colour.");
}
//version 2 of the program.
alienColour = 'yellow';
if (alienColour === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColour === "yellow") {
    console.log("Version 2:Player earned 10 points.");
}
else if (alienColour === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.group("please select right colour.");
}
//version 3 of the program.
alienColour = 'red';
if (alienColour === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColour === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColour === "red") {
    console.log("Version 3:Player earned 15 points.");
}
else {
    console.group("please select right colour.");
}
