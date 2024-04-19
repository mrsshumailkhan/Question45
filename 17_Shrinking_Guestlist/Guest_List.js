let guestList = ["Imran Khan", "Bill Gates", "Elon Musk"];
// Iterate over the array and print an invitation message to each person
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear Mr. ${guestList[i]},\n\nYou are cordially invited to dinner at my place.\n\n Thankyou. `);
// }
let absent_guest = "Imran Khan";
let new_guest = "Kamran Tessori";
guestList[0] = new_guest;
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear Mr. ${guestList[i]},\n\nYou are cordially invited to dinner at my place.\n\n Thankyou. `);
// }
console.log(`${absent_guest} is not comming for dinner `);
console.log("Good News! we find big table so we are inviting 3 more guest.");
guestList.unshift("Sir Zia Khan");
guestList.splice(2, 0, 'Daniyal Nagori');
guestList.push("sir Ameen");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr. ${guestList[i]},\n\nYou are cordially invited to dinner at my place.\n\n Thankyou. `);
}
console.log("\nSorry we can not arrange big table, only Two peoples will be invited.");
while (guestList.length > 2) {
    let remove_guest = guestList.pop();
    console.log(`sorry Mr. ${remove_guest}, You are not invited for Dinner.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr. ${guestList[i]},\n\nYou are still invited.\n\n Thankyou. `);
}
guestList.slice(0, 2);
console.log(guestList);
export {};
