function LogoBar(ids, classes, text, dates, skills, panelName, titles, awards) {
    this.ids = ids;
    this.classes = classes;
    this.text = text;
    this.dates = dates;
    this.skills = skills;
    this.panelName = panelName;
    this.titles = titles;
    this.awards = awards;
    this.state = 0;

    this.toPage(this.state);
};

// called on logo click
LogoBar.prototype.logoClick = function(clicked) {
    if (this.state == clicked) { return; }

    TweenMax.to(this.ids[clicked], .5, {width:"90px", opacity:"1"});

    for (var x=0; x<this.ids.length; x++) {
        if (x != clicked)
            TweenMax.to(this.ids[x], .5, {width:"45px", opacity:".5"});
    }

    this.state = clicked;
    this.toPage(clicked);
};

// helper method to change the information on the page
LogoBar.prototype.toPage = function(clicked) {
    var new_class = "navbar panel "+this.classes[clicked];
    TweenMax.to("#"+this.panelName+"_panel", .5, {className: new_class});

    if (this.panelName == "exp")
        document.getElementById(this.panelName+"_img").src = "images/" + this.classes[clicked] + "_titleimg.png";
    else if (this.panelName == "proj") {
        document.getElementById(this.panelName+"_title").innerHTML = this.titles[clicked];
        document.getElementById(this.panelName+"_award").innerHTML = this.awards[clicked];
        if (clicked == 0)
            document.getElementById("snsvideo").style.visibility = "visible";
        else {
            document.getElementById("snsvideo").style.visibility = "hidden";
            var div = document.getElementById("snsvideo");
            var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
            iframe.postMessage('{"event":"command","func":"' + "pauseVideo" + '","args":""}', '*');
        }
    }
    document.getElementById(this.panelName+"_date").innerHTML = this.dates[clicked];
    document.getElementById(this.panelName+"_text").innerHTML = this.text[clicked];
    document.getElementById(this.panelName+"_skill1").innerHTML = this.skills[clicked][0];
    document.getElementById(this.panelName+"_skill2").innerHTML = this.skills[clicked][1];
};
