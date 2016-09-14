// Prevent "not well-formed" warnings for ajax calls
$.ajaxSetup({beforeSend: function(xhr){
  if (xhr.overrideMimeType)
  {
    xhr.overrideMimeType("application/json");
  }
}
});

function Project(title, folder)
{
    this.title = title;
    this.folder = folder;
    this.description = "";
    this.getDescription = function(el) {
        if (el) {
            // Grab description and add to el's html so project's description is shown first on page
            $.getJSON("projects/" + folder + "/description.json", function(data) {
                this.description = data.description;
                el.html(this.description);
                el.append(this.readMore())
            }.bind(this));
        } else {

            // Grab description and store with project
            $.getJSON("projects/" + folder + "/description.json", function(data) {
                this.description = data.description;
            }.bind(this));
        }
    };

    this.readMore = function() {
        return "<a href=\"projects/" + folder + "/" + folder + ".html\"> Read More ... </a>";
    }
}

var Graphics = {

    lastProj: null,
    PRE: "<li class=\"project unselect\"><img src=\"projects/",
    POST: "\" height=\"50px\" width=\"50px\"></li>",

    projects: [
        new Project("Crystal Lattice", "crystal"),
        new Project("Ionic", "ionic"),
        new Project("Flood Fill", "flood"),
        new Project("Arrakis", "arrakis"),
        new Project("Obj2Spring", "obj2spring")
    ],

    // Constructs html for the project thumbnail
    html4Project: function(project) {
        return this.PRE + project.folder + "/thumb.png" + this.POST;
    },

    // Adds the project to the html of the page
    addToPage: function(project) {
        $("#projects").append(this.html4Project(project));
    },

    // Adds all the projects to the page
    loadProjects: function() {

        // Load first project so that it inputs description into html
        if (this.projects.length > 0) {
            this.projects[0].getDescription($("#summary p"));
            this.addToPage(this.projects[0]);
            this.selectFirstProject();
        }

        // Go through projects and grab their descriptions and add them to the page.
        for (var i = 1; i < this.projects.length; i++) {
            this.projects[i].getDescription();
            this.addToPage(this.projects[i]);
        }
    },

    // Loads data of first project to page
    selectFirstProject: function() {
        // Start page with first project selected
        var firstproject = $("#projects li:eq(0)");
        firstproject.removeClass("unselect");
        firstproject.addClass("select");

        var folder = this.projects[0].folder;

        $("#title p").html(this.projects[0].title);
        $("#host img").attr("src", "projects/" + folder + "/" + folder + ".png");
        $("#summary p").attr("href", "projects/" + folder + "/" + folder + ".html");
        this.lastProj = firstproject;
    }
};

// Highlight project list item
$(document).on("mouseenter", "#projects li", function() {
    if ($(this) != Graphics.lastProj) {
        $(this).addClass("hover");
    }
});

// Remove highlight on project list item
$(document).on("mouseleave", "#projects li", function() {
    if ($(this) != Graphics.lastProj) {
        $(this).removeClass("hover");
    }
});

//
$(document).on("click", "#projects li", function() {

    // If prior project selected then revert it back to original state (eg. unhighlight)
    if (Graphics.lastProj != null) {
        Graphics.lastProj.removeClass("select");
        Graphics.lastProj.addClass("unselect");
    }

    // Get index of the project selected by user
    var ndx = $(this).parent().children().index(this);

    // Change title and image on page to that of the new project
    var project = Graphics.projects[ndx];
    var folder = project.folder;

    $("#title p").html(project.title);


    $("#host img").attr("src", "projects/" + folder + "/" + folder + ".png");
    $("#summary p").html(project.description);
    $("#summary p").append(project.readMore());

    // Store project so we may change items back once a new selection is made
    Graphics.lastProj = $(this);

    // Highlight project with a border
    $(this).removeClass("unselect");
    $(this).addClass("select");
});
