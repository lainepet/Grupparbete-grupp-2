window.onload = function() {
    // Lyssna efter händelser
    let teamMembers = document.getElementsByClassName("team-member");

	for(let i = 0; i < teamMembers.length; i++) {
		teamMembers[i].addEventListener("mouseover", function() {
			effectOn(teamMembers[i]);
		});
		teamMembers[i].addEventListener("mouseout", function() {
			effectOff(teamMembers[i]);
		});
	}
}
var editTitle = function(e) {
    // Ändra "team-title"
};

function effectOn(element) {
    element.classList.add("hover-on");
}

function effectOff(element) {
    element.classList.remove("hover-on");
}
