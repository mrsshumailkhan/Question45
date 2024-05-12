"use strict";
// Define the function to show magicians name.
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//function to make magicians great through .map it will modifay array.
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of magician names.
let magicians_name = ['Harry poter', 'Dai Vernon', 'Doug Henning'];
//Making a copy of orignal array through .slice() function.
let copy_magician_names = magicians_name.slice();
// Modify the copied array to include "The Great" with thier names.
let copy_great_magicians = make_great(copy_magician_names);
// Show both arrays orignal and copied.
// Orignal
show_magicians(magicians_name);
// Copied
show_magicians(copy_great_magicians);
