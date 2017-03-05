/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%", "Kyle Chivers");
var formattedRole = HTMLheaderRole.replace("%data%", "SEO Manager");

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);