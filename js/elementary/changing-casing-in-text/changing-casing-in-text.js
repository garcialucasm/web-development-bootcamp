//Create a var that stores the name that user enters via prompt.

var nameSubmited = prompt("Type your first name:");

//Slice, capitalise the letter and show the capitalised name.

alert("Hello, " + nameSubmited.slice(0,1).toUpperCase() + nameSubmited.slice(1,nameSubmited.length).toLowerCase() + "!");