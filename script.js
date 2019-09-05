
window.onload = function() {
    // Lyssna efter händelser
    let team = document.getElementsByClassName('team-member');

    for (i = 0; i < team.length; i++) { 
        team[i].children[0].addEventListener("click",editTitle);

        for (let j = 0; j < team[i].children.length; j++){
            let memberElem = team[i].children[j];
            team[i].addEventListener("mouseout",effectOff);
            memberElem.addEventListener("mouseover",effectOn);
        }
    }
}
var editTitle = function(e) {
    // Ändra "team-title"
    var title = prompt("Byt tittel här");
    if(title != null){
        e.target.parentElement.children[2].innerHTML = title;
        console.log(e.target.parentElement.children[2]);
    }
};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?
    id.target.parentElement.classList.add("hovering");
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    id.target.parentElement.classList.remove("hovering");
}

