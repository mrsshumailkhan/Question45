"use strict";
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//Make a list of five or more usernames called current_users.
//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_userName = ['ShuMail', 'KhAliD', 'KhIZer', 'Azeen', 'Elhan'];
let new_userName = ['Hassam', 'ShuMail', 'Ahris', 'Azeen', 'khalil'];
new_userName.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_userName.map(c_user => c_user.toLowerCase().includes(lowerCase))) {
        console.log(`The username ${newUsername} is not available. Please write a diffrent username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
