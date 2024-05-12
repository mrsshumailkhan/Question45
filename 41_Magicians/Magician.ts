//Define a function to print each magician name from an array,

function show_magicians(magicians: string[]){

    magicians.forEach(name => console.log(name));

}

// Define an array containing magicians name.

let magicians_name = ['Harry poter','Dai Vernon','Doug Henning'];

// call the function to print each magician name.
show_magicians(magicians_name);