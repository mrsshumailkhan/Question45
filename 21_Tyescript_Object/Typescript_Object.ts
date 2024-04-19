// write a programe that creates objects containing these item.

//data of person
interface person {
    age : number,
    name : string,
    nationality : string,
    student :Boolean
}
// person object
let person :person = {

     age : 26 ,
     name : 'Maria' ,
     nationality : 'Pakistan' ,
     student : true
}
//print person
console.log(person);

//Data type of car object
interface car {
    maker : string,
    color : string,
    automatic : Boolean
}

// car object
let car = {
    maker : 'toyota',
    color : 'Red',
    automatic : true
}

// print car object
console.log(car);