
// Define the function to show magicians name.
function show_magicians(magicians: string[]){

    magicians.forEach(name => console.log(name));
}

//function to make magicians great through .map it will modifay array.
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}
    
// Define an array of magician names.
let magicians_name = ['Harry poter','Dai Vernon','Doug Henning'];

// Call make_great function to modify magicians name.
let great_magicians =  make_great(magicians_name);

//Call show_magicians that show modified list of magicians.
show_magicians(great_magicians);