var containerWidth = 228;
var logoWidth = 228;
var aniTime = 1250;

var phraseWidth = 57;
var border = 4;

var raphicsExp = 106;
var esumeExp = 80;
var epositoryExp = 250;
var ackpackExp = 192;

function strpx(numPixels) {
    return numPixels.toString() + "px";
}

function resetAnimation(el, animation) {
    el.removeClass(animation);
    el.css("width", el.css("width"));
    el.addClass(animation);
}

// Links to respective portions of website
$("#graphics").click(function() {
    window.open("graphics/graphics.html", "_self");
});

$("#repository").click(function() {
    window.open("repository/repository.html", "_self");
});

$("#resume").click(function() {
    window.open("resume/resume.html", "_self");
});

// GRAPHICS
$("#graphics").mouseenter(function() {

    // Calculations for width expansion of elements
    var cntnrExp = strpx(containerWidth + 2*raphicsExp);
    var logoExp = strpx(logoWidth + raphicsExp);
    var graphicsExp = strpx(raphicsExp + phraseWidth);

    // Animations for expansion of logo
    // Quick css adjust to account for border
    $("#container").css("width", strpx(containerWidth + 2*border));
    $(this).css("width", strpx(phraseWidth + border));
    $("#logo").css("width", strpx(logoWidth + border));
    $("#logo").css("right", strpx(border));

    $("#container").animate({width: cntnrExp}, aniTime);
    $(this).animate({width: graphicsExp}, aniTime);
    $("#logo").animate({width: logoExp, right: strpx(raphicsExp)}, aniTime);


    // Setting up border around text
    $("#raphicsBorder").animate({width: strpx(raphicsExp-border)}, aniTime);
    $("#raphicsBorder").css("border", strpx(border) + " solid #DDDDDD");
    //$("#raphicsBorder").css("border", strpx(border) + " solid #424242");
    $("#raphicsBorder").css("border-left", "none");

    // Setting up text animation
    $("#raphics").html("raphics");

    //resetAnimation($("#raphics"), "textAnimation");

    $("#raphics").animate({width: strpx(raphicsExp - border)}, aniTime);
    $("#raphics").css("margin-left", "5px");

});


$("#graphics").mouseleave(function() {

    // Stop all animations
    $("#container").stop();
    $("#logo").stop();
    $("#raphics").stop();
    $("#raphicsBorder").stop();
    $(this).stop();

    // Reset containers to original widths
    $("#container").css("width", strpx(containerWidth));
    $("#logo").css("width" , strpx(logoWidth));
    $("#logo").css("right", "0px");
    $(this).css("width" , strpx(phraseWidth));

    // Eliminate border around text
    $("#raphicsBorder").css("width", "0px");
    $("#raphicsBorder").css("border", "none");

    // Eliminate text
    $("#raphics").html("");
    $("#raphics").css("width", "0px");
    $("#raphics").css("margin-left", "0px");
});

///////////////////////////////////////////////////////////////////////////////

// REPOSITORY
$("#repository").mouseenter(function() {
    var cntnrExp = strpx(phraseWidth + 2*epositoryExp);
    var logoExp = strpx(phraseWidth + epositoryExp);
    var repositoryExp = strpx(epositoryExp + phraseWidth);

    $("#container").animate({height: cntnrExp}, aniTime);
    $("#repository").animate({height: repositoryExp}, aniTime);
    $("#logo").animate({height: logoExp, top: strpx(epositoryExp)}, aniTime);


    // Setting up border around text
    $("#epositoryBorder").animate({height: strpx(epositoryExp-border)}, aniTime);
    $("#epositoryBorder").css("width", "37px");
    $("#epositoryBorder").css("border", strpx(border) + " solid #DDDDDD");
    //$("#epositoryBorder").css("border", strpx(border) + " solid #424242");
    $("#epositoryBorder").css("border-top", "none");

    $("#epository").html("e<br>p<br>o<br>s<br>i<br>t<br>o<br>r<br>y");

});

$("#repository").mouseleave(function() {
    $("#container").stop();
    $("#logo").stop();
    $(this).stop();
    $("#epositoryBorder").stop();

    $("#container").css("height", strpx(phraseWidth));
    $("#logo").css("height", strpx(phraseWidth));
    $("#logo").css("top", "0px");
    $("#repository").css("height", strpx(phraseWidth));

    // Eliminate border around text
    $("#epositoryBorder").css("width", "0px");
    $("#epositoryBorder").css("height", "0px");
    $("#epositoryBorder").css("border", "none");

    $("#epository").html("");

});

//////////////////////////////////////////////////////////////////////////////

// BACKPACK

$("#backpack").mouseenter(function() {

    // Calculate expansion values
    var cntnrExp = strpx(phraseWidth + 2*ackpackExp);
    var logoExp = strpx(phraseWidth + ackpackExp);
    var backpackExp = strpx(ackpackExp + phraseWidth);


    // Deal with initial border issue
    $(this).css("height", strpx(phraseWidth + border));
    //$(this).css("bottom", strpx(border));
    $("#logo").css("height", strpx(phraseWidth + border));
    $("#container").css("height", strpx(phraseWidth + border*2));
    $("#graphics").css("top", strpx(border));
    $("#repository").css("top", strpx(border));
    $("#resume").css("top", strpx(border));


    // Setting up border around text
    $("#ackpackBorder").css("border", strpx(border) + " solid #DDDDDD");
    $("#ackpackBorder").css("width", "37px");
    $("#ackpackBorder").animate({height: strpx(ackpackExp-border)}, aniTime);


    // Animate the expansion
    $("#container").animate({height: cntnrExp}, aniTime);
    $("#logo").animate({height: logoExp}, aniTime);
    $(this).animate({height: backpackExp}, aniTime);

    // Shift all other logo elements downwards to maintain centeralized logo
    $("#graphics").animate({top: strpx(ackpackExp)}, aniTime);
    $("#repository").animate({top: strpx(ackpackExp)}, aniTime);
    $("#resume").animate({top: strpx(ackpackExp)}, aniTime);

    $("#ackpackBorder").css("border-top", "none");
    $("#ackpack").html("a<br>c<br>k<br>p<br>a<br>c<br>k");


});

$("#backpack").mouseleave(function() {

    // Stop all animations
    $("#container").stop();
    $("#logo").stop();
    $("#graphics").stop()
    $("#repository").stop()
    $("#resume").stop()
    $(this).stop();
    $("#ackpackBorder").stop();

    // Return elements to original heights
    $("#container").css("height", strpx(phraseWidth));
    $("#logo").css("height", strpx(phraseWidth));
    $(this).css("height", strpx(phraseWidth));

    // Return other phrases to original positions
    $("#logo").css("bottom", "0px");
    $("#graphics").css("top", "0px");
    $("#repository").css("top", "0px");
    $("#resume").css("top", "0px");
    $(this).css("top", "0px");

    $("#ackpack").html("");

    // Eliminate border around text
    $("#epositoryBorder").css("width", "0px");
    $("#ackpackBorder").css("height", "0px");
    $("#ackpackBorder").css("border", "none");

});

//////////////////////////////////////////////////////////////////////////

// RESUME

$("#resume").mouseenter(function() {

    // Calculations for container expansion
    var cntnrExp = strpx(containerWidth + 2*esumeExp);
    var logoExp = strpx(logoWidth + esumeExp);
    var resumeExp = strpx(esumeExp + phraseWidth);

    // Animations of container expansions
    $("#container").animate({width: cntnrExp}, aniTime);
    $("#logo").animate({width: logoExp, left: strpx(esumeExp)}, aniTime);
    $(this).animate({width: resumeExp}, aniTime);


    $("#esumeBorder").animate({width: strpx(esumeExp-border)}, aniTime);

    // Text animation
    $("#esume").html("esume");
    //resetAnimation($("#esume"), "textAnimation");
    $("#esume").animate({width: strpx(esumeExp-border)}, aniTime);
    $("#esume").css("margin-left", "5px");
    $("#esumeBorder").css("border", strpx(border) + " solid #DDDDDD");
    //$("#esumeBorder").css("border", strpx(border) + " solid #424242");
    $("#esumeBorder").css("border-left", "none");
});

$("#resume").mouseleave(function() {

    // Stop animations
    $("#container").stop();
    $("#logo").stop();
    $(this).stop();
    $("#esumeBorder").stop();

    // Return containers to original width
    $("#container").css("width", strpx(containerWidth));
    $("#logo").css("width" , strpx(logoWidth));
    $("#logo").css("left", "0px");

    $("#esumeBorder").css("width", "0px");
    $("#esumeBorder").css("border", "none");
    $("#esume").html("");
    $(this).css("width" , strpx(phraseWidth));

});
