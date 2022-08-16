//Length property//
var myName = "qwertyuiopasdfghjklzxcvbnm";
var length = myName.length;
console.log(length);

/////////////////////////////////
//Etracting the string parts//
//We have 3 methods:
//slice(start, end) Start with 0 and end means positions of a string
//substring((start, end))
//substr(start, length)

//String slice()
var stringslice = myName.slice(5, 15);
console.log(stringslice);

// substring()
var bookName = "The secret";
var substring = bookName.substring(1, 6); // if value is negative
console.log(substring);

//////////////////////////////////////////////////////
//replace() method
var newBookName = bookName.replace("secret", "alchemist");
console.log(newBookName);

//toUpperCase() & toLowerCase() methods
var upperCaseBookName = bookName.toUpperCase();
console.log(upperCaseBookName);

var lowerCaseBookName = bookName.toLowerCase();
console.log(lowerCaseBookName);

//trim() method
var trimBookName = bookName.trim();
console.log(trimBookName); /// it will remove all the white spaces between the sentences
