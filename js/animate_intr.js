var interests = ["snow", "hike", "volley", "games", "cook", "eat"];
var hasVid = [];
var intrCont = new IntrController(interests, hasVid);

function IntrController(interests, hasVid) {
    this.interests = interests;
    this.hasVid = hasVid;
    this.state = 0;
}

IntrController.prototype.intrClick = function(clicked) {
    if (clicked == this.state) { return; }

    for (var x=0; x<this.interests.length; x++) {
        if (x == clicked) {
            document.getElementById("like_"+this.interests[x]).style.visibility = "visible";
            document.getElementById("intr_panel").className = "centric panel "+this.interests[x];
            if (this.hasVid.indexOf(this.interests[x]) != -1)
                document.getElementById(this.interests[x]+"_vid").style.visibility = "visible";
        }
        else {
            document.getElementById("like_"+this.interests[x]).style.visibility = "hidden";
            if (this.hasVid.indexOf(this.interests[x]) != -1)
                document.getElementById(this.interests[x]+"_vid").style.visibility = "hidden";
        }
    }

    this.state = clicked;
};
