/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name: "Kyle Chivers",
	contactInfo: {
		mobile: "(209)740-9122",
		email: "chiverskyle@gmail.com",
		twitter: "@chiverskyle",
		github: "kchiv"
	},
	pictureURL: "images/fry.jpg",
	welcomeMessage: "Hi, my name is Kyle.",
	skills: ["SEO", "HTML", "CSS", "Javascript", "Python"],
	work: {
		role: "SEO Manager",
		employer: "Chegg",
		years: "2015 - Present",
		city: "Santa Clara",
		state: "California"
	},
	education: {
		school: "CSU East Bay",
		major: "Marketing",
		attended: "2009 - 2012"
	}
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.work.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contactInfo.email).replace("%data%", bio.contactInfo.mobile);
var formattedEmployer = HTMLworkEmployer.replace("%data%", bio.work.employer);
var formattedTitle = HTMLworkTitle.replace("%data%", bio.work.role);
var formattedDates = HTMLworkDates.replace("%data%", bio.work.years);
var formattedLocation = HTMLworkLocation.replace("%data%", bio.work.city + ", " + bio.work.state)

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
$("#topContacts").prepend(formattedContact);
$("#skillset").prepend(HTMLskillsStart);
for (skill in bio.skills) {
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").prepend(formattedSkills);
}
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedEmployer + formattedTitle);
$(".work-entry").append(formattedDates);
$(".work-entry").append(formattedLocation);