
window.onload = function() {
    // Lyssna efter händelser
    let team = document.getElementsByClassName('team-member');
    team[0].children[0].addEventListener("mouseover", effectOn);
    team[0].children[0].addEventListener("mouseout", effectOff);  

    document.getElementById("donlee").addEventListener("click", editTitle);
    document.getElementById("frankiesmith").addEventListener("click", editTitle);
    
}
var editTitle = function(e) {
    // Ändra "team-title"
    //document.getElementsByClassName("team-title").innerHTML = alert("triggered");
    var title = prompt("Byt tittel här");
    if(title != null){
        document.getElementsByClassName("team-title")[1].innerHTML = title;
        console.log(title);
    }
};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?
    //document.getElementsByClassName("team-title").innerHTML = prompt("triggered");
    id.target.parentElement.classList.add("hovering");
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    id.target.parentElement.classList.remove("hovering");
}

