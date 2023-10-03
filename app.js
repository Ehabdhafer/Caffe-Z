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

// in the JS file :
// Create a div > paragraph > ul > li
//    Fill the data you got from the user into the previous elements :
//    Write it back to the html page

let div1 = document.createElement("div");
let p1 = document.createElement("p");
let ul1 = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

p1.textContent = `name is ${name}`;
li1.textContent = `gender is ${gender}`;
li2.textContent = `type of drink ${drink}`;
li3.textContent = `drink name is ${dname}`;

div1.appendChild(p1);
div1.appendChild(ul1);
ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);

document.body.appendChild(div1);
