var gender;
function getgender() {
  while (gender != "male" && gender != "female") {
    gender = prompt("Your Gender");
  }

  if (gender == "male") {
    alert("Welcome Mr" + " " + name);
  } else if (gender == "female") {
    alert("Welcome Ms" + " " + name);
  }
}
var name = prompt("What is your Name");
var title = getgender();
var drink = prompt("Do you want to drink a hot or cold drink ?");

if (drink == "hot" || drink == "cold") {
  var dname = prompt("write the name of the drink you want");

  alert("Your drink is getting prepared");

  console.log(name + " " + dname);
} else {
  alert("You not ordered anything");
  console.log("no orders");
}

let array = [name, gender, drink, dname];

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}
