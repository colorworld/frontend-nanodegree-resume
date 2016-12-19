/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var email = "like apple";
var newemail = email.replace("apple", "google");
console.log(email);
console.log(newemail)

var awesoneThough = "My name is Cameron and I am AWESOME";
var funThought = awesoneThough.replace("AWESOME", "FUN");
// $("#main").append(funThought);


var formattendName = HTMLheaderName.replace("%data%", "liwei");
// $("#header").append(formattendName);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattendName);