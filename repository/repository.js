
// Class for repository
function Repo(title, link, description, tags)
{
    this.title = title;
    this.link = (link.substring(0, 4) == "http") ? link : "https://github.com/corbingrbr/" + link;
    this.description = description;
    this.tags = tags;
    this.genHTML = function() {

        // HTML for title and beginning of tags entry
        var tr = "<tr class=\"repo\"><td class=\"titles\">" + this.title + "</td><td class=\"tags\">";

        // HTML for tags
        for (var i = 0; i < this.tags.length; i++) {

            // Workaround since 'C++' isn't a permissible selector
            var cls = this.tags[i] == "C++" ? "CPP" : this.tags[i];

            tr += "<span class=\"" + cls + "\">" + this.tags[i] + "</span>";

            // Only append ',' to tags when they aren't last
            if (i != this.tags.length - 1) { tr += ",  "; }
        }

        // HTML for description
        tr += "</td><td class=\"descriptions\">" + this.description + "</td></tr>"

        return tr;
    };
}

// Collection of repositories hosted on page
var Repository = {
    repos: [
                new Repo("Crystal Lattice", "CrystalLattice", "Visualization of three cubic unit cells", ["C++", "OpenGL"]),
                new Repo("WebGLCL", "web-gl-cl", "Translation of Crystal Lattice to WebGL", ["Javascript", "WebGL"]),
                new Repo("Flood Fill", "https://github.com/MatheusFaria/flood-fill", "Voxel-based puzzle platformer", ["C++", "OpenGL"]),
                new Repo("GRBR", "grbr", "This website", ["HTML", "CSS", "Javascript"]),
                new Repo("RayTrace", "RayTrace", "A scene rendering process", ["C++"]),
                new Repo("Obj2SpringSystem", "Obj2SpringSystem", "Convert objs to spring systems", ["C++", "OpenGL"]),
                new Repo("Light Lab", "LightLab", "Pattern configurable LED poi", ["C++", "HTML", "CSS", "Javascript"]),
                new Repo("Ionic", "ionic", "Visualization of ionic bonding", ["Java", "Processing"]),
                new Repo("Cesium", "", "Visualization of REST database using CesiumJS", ["Javascript", "Python"])
            ],

    loadRepos: function() {
        for (var i = 0; i < this.repos.length; i++) {
            $("#repos").append(this.repos[i].genHTML());
        }
    }
};

$(document).on('click', '.repo', function() {
        // Grab index of repo, offset because header considered a child
        var ndx = $(this).parent().children().index(this) - 1;
        // Open the link in new window
        if (Repository.repos[ndx].link != "https://github.com/corbingrbr/") {
          window.open(Repository.repos[ndx].link);
        }
    });
