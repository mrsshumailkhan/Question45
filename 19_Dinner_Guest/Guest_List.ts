let guestList: string[] = ["Imran Khan", "Bill Gates", "Elon Musk"];
// Iterate over the array and print an invitation message to each person
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear Mr. ${guestList[i]},\n\nYou are cordially invited to dinner at my place.\n\n Thankyou. `);
// }
let absent_guest :string = "Imran Khan";
let new_guest : string = "Kamran Tessori";
guestList[0] = new_guest ;

// for (let i = 0; i < guestList.length; i++) {

//     console.log(`Dear Mr. ${guestList[i]},\n\nYou are cordially invited to dinner at my place.\n\n Thankyou. `);
// }

// console.log(`${absent_guest} is not comming for dinner `);
// console.log("Good News! we find big table so we are inviting 3 more guest.");

//array main 3 guest add kiye hain.
guestList.unshift("Sir Zia Khan");
guestList.splice(2 , 0 , 'Daniyal Nagori' );
guestList.push("sir Ameen");

//yahan per main ny 6 guest ke array ko print krvaya hy.
// for (let i = 0; i < guestList.length; i++) {

//     console.log(`Dear Mr. ${guestList[i]},\n\nYou are cordially invited to dinner at my place.\n\n Thankyou. `);
// }

//sorry Message to guest for not inviting.
// console.log("\nSorry we can not arrange big table, only Two peoples will be invited.");

//yaha per guest remove kiye hyn.
while(guestList.length > 2){
    let remove_guest = guestList.pop();
    // console.log(`sorry Mr. ${remove_guest}, You are not invited for Dinner.`);
}

//bachay hoye 2 invited guest.
// for (let i = 0; i < guestList.length; i++) { 
//     console.log(`Dear Mr. ${guestList[i]},\n\nYou are still invited.\n\n Thankyou. `);
// }

//mene sare guest array se remove kar diye.
guestList.splice(0, 2);
console.log(guestList);

//Exercise 19

//print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guest are: ${guestList.length}`);