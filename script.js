
window.onload = function() {
    // Lyssna efter händelser
    //document.getElementById("frankiesmith").addEventListener("mouseover", effectOn);
    document.getElementById("donlee").addEventListener("click", editTitle);
    document.getElementById("frankiesmith").addEventListener("click", editTitle);
   // document.getElementById("frankiesmith").addEventListener("mouseout", effectOff);
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
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
}

