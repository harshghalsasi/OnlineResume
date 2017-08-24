var bio = {
    "name": "Harshavardhan Ghalsasi",
    "role": "Front-End Web Developer",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "xxxxx xxxxx",
        "email": "harshghalsasi@gmail.com",
        "github": "harshghalsasi",
        "location": "Pune"
    },
    "skills": ["Front-end-developer ", " Electronics Engineer ", " Presentation", "Problem-solver"],
    "welcomeMessage": "Welcome to my biography!"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);


    var formattedwelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcome);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);


    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

    var formamobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formamobile);

    var formaemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formaemail);

    var formagit = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formagit);

    var formaloc = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formaloc);
};

bio.display();


var work = {
    "jobs": [{
            "employer": "YOLO",
            "title": "Trainee",
            "location": "Mumbai",
            "dates": "Jan-16 to Dec-16",
            "description": "Training for given post. Worked for almost a year as an intern. Work was mainly regarding hydropowerplant maintainance and study ofits working....."
        },

        {
            "employer": "HOLO",
            "title": "Trainee",
            "location": "Delhi",
            "dates": "Jan-17 to present",
            "description": "Training for given post. Worked for almost a year as an intern. Work was mainly regarding chip designs. Cheap design of microchips with macromachinary built my experience...."
        }
    ]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle); //selects last element in script with class .work-entry.

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescri = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescri);
    }
};
work.display();


var education = {
    "schools": [{
            "name": "Pethe HS",
            "dates": "2000-2010",
            "degree": "Primary School",
            "location": "Nashik",
            "majors": ["History", " Maths", " Languages"]
        },
        {
            "name": "RYK",
            "dates": "2011-2013",
            "degree": "Higher School",
            "location": "Nashik",
            "majors": ["Physics", " Maths", " Chemistry"]
        },
        {
            "name": "MIT",
            "dates": "2013-2017",
            "degree": "Graduation",
            "location": "Pune",
            "majors": ["Analog EXE", " Digital EXE", " CompSci"]
        }
    ],
    "onlineCourses": [{
        "school": "Udacity",
        "dates": "Ongoing",
        "title": "Web Developer",
        "url": "www.udacity.com"
    }]
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);
    }



    for (var j = 0; j < education.onlineCourses.length; j++) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedOLtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedOLschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        $(".education-entry:last").append(formattedOLtitle + formattedOLschool);

        var formattedOLDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        $(".education-entry:last").append(formattedOLDates);

        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".education-entry:last").append(formattedURL);
    }
};

education.display();



var projects = {
    "projects": [{
            "title": "Smart Doorbell",
            "dates": "Jan-16 to may-16",
            "description": "The Smart Doorbell project is all about handling the door remotely that is without physically touching it. The project is a combination of some protocols and an embedded system. Raspberry Pi has been chosen for the project as it is a powerful controller totally matching with the project’s requirements. EMail system is used for the over net communications. Mechanical assembly is interfaced to the controller to operate the door and monitoring has been done using a webcam at the peephole of the door.",
            "images": ["images/proj1.jpg", "images/proj2.jpg"]
        },
        {
            "title": "Vehicle lane keeping System",
            "dates": "June-16 to dec-16",
            "description": "Vehicle Assist System. This electronics based system assists vehicle driver to keep the track of the road and not to lose the road reducing chances of accidents.",
            "images": ["images/proj3.jpg", "images/proj4.jpg"]
        }
    ]
};

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescri = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescri);

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();



$(document).click(function(loc) {
    var x = loc.pageX; //loc.pageX,.pageY returns pixel values of x&y frm obj loc.
    var y = loc.pageY;
    logClicks(x, y);
});


/* $ ("#main").append(internationalizeButton);
function inName(name) {
  var arr = name.split(" ");    //change name str into array. Split after space.
  arr[1] = arr[1].toUpperCase();
  arr[0] = arr[0].slice(0,1).toUpperCase() +  arr[0].slice(1).toLowerCase();
   final = arr.join(" ");
  return final;
}  */

$("#mapDiv").append(googleMap);

function LI() {
    window.open("https://www.linkedin.com/in/harshavardhan-ghalsasi-174702115/");
}

function FB() {
    window.open("https://www.facebook.com/harshavardhan.ghalsasi");
}

function GH() {
    window.open("https://github.com/harshghalsasi");
}
