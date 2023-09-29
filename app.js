var name = prompt("What is your Name");
var gender = prompt("Your Gender");

if (gender == "male") {
  alert("Welcome Mr" + " " + name);
} else if (gender == "female") {
  alert("Welcome Ms" + " " + name);
} else {
  alert("Welcome" + " " + name);
}

var drink = prompt("Do you want to drink a hot or cold drink ?");

if (drink == "yes") {
  var dname = prompt("write the name of the drink you want");

  alert("Your drink is getting prepared");

  console.log(name + " " + dname);
} else {
  alert("You not ordered anything");
  console.log("no orders");
}
