/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name: "Kyle Chivers",
	role: "SEO Manager",
	contactInfo: {
		mobile: "(209)740-9122",
		email: "chiverskyle@gmail.com",
		twitter: "@chiverskyle",
		github: "kchiv"
	},
	pictureURL: "images/fry.jpg",
	welcomeMessage: "Hi, my name is Kyle.",
	skills: ["SEO", "HTML", "CSS", "Javascript", "Python"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contactInfo.email).replace("%data%", bio.contactInfo.mobile);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formattedContact);
$("#header").prepend(formattedPic);