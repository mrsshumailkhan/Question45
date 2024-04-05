// Define an array to store the names of people you'd like to invite to dinner

let guestList: string[] = ["Imran Khan", "Bill Gates", "Elon Musk"];

// Iterate over the array and print an invitation message to each person

for (let i = 0; i < guestList.length; i++) {

    console.log(`Dear Mr. ${guestList[i]},\n\nYou are cordially invited to dinner at my place.\n\n Thankyou. `);
}

let absent_guest :string = "Bill Gates";

let new_guest : string = "Kamran Tessori";

guestList[0] = new_guest ;

for (let i = 0; i < guestList.length; i++) {

    console.log(`Dear Mr. ${guestList[i]},\n\nYou are cordially invited to dinner at my place.\n\n Thankyou. `);
}

console.log(`${absent_guest} is not comming for dinner `);