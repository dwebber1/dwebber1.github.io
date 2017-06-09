function preloadImages(e) {
    preloadImages.list || (preloadImages.list = []);
    for (var t = preloadImages.list, s = 0; s < e.length; s++) {
        var n = new Image;
        n.onload = function() {
            var e = t.indexOf(this); - 1 !== e && t.splice(e, 1)
        }, t.push(n), n.src = e[s]
    }
}

function LogoBar(e, t, s, n, i, o, a, r) {
    this.ids = e, this.classes = t, this.text = s, this.dates = n, this.skills = i, this.panelName = o, this.titles = a, this.awards = r, this.state = 0, this.toPage(this.state)
}

function IntrController(e, t) {
    this.interests = e, this.hasVid = t, this.state = 0
}
console.log("loading images"), preloadImages([ "images/briefme_titleimg.png", "images/microsoft_titleimg.png", "images/antengo_titleimg.png", "images/cook.jpg", "images/door.jpg", "images/eat.jpg", "images/geisel.jpg", "images/glass.jpg", "images/games.jpg", "images/overdrive.jpg", "images/pops.jpg", "images/rockies.jpg", "images/SD.jpg", "images/sdhacks.jpg","images/apple_park.jpg", "images/stanford.jpg", "images/tentfeet.jpg", "images/usc.jpg", "images/vb.jpg", "images/snow.jpg", "images/hike.jpg", "images/devpostlogo.png"]), console.log("done loading images"), LogoBar.prototype.logoClick = function(e) {
    if (this.state != e) {
        TweenMax.to(this.ids[e], .5, {
            width: "90px",
            opacity: "1"
        });
        for (var t = 0; t < this.ids.length; t++) t != e && TweenMax.to(this.ids[t], .5, {
            width: "45px",
            opacity: ".5"
        });
        this.state = e, this.toPage(e)
    }
}, LogoBar.prototype.toPage = function(e) {
    var t = "navbar panel " + this.classes[e];
    if (TweenMax.to("#" + this.panelName + "_panel", .5, {
            className: t
        }), "exp" == this.panelName) document.getElementById(this.panelName + "_img").src = "images/" + this.classes[e] + "_titleimg.png";
    else if ("proj" == this.panelName)
        if (document.getElementById(this.panelName + "_title").innerHTML = this.titles[e], document.getElementById(this.panelName + "_award").innerHTML = this.awards[e], 0 == e) document.getElementById("snsvideo").style.visibility = "visible";
        else {
            document.getElementById("snsvideo").style.visibility = "hidden";
            var s = document.getElementById("snsvideo"),
                n = s.getElementsByTagName("iframe")[0].contentWindow;
            n.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
        }
    document.getElementById(this.panelName + "_date").innerHTML = this.dates[e], document.getElementById(this.panelName + "_text").innerHTML = this.text[e], document.getElementById(this.panelName + "_skill1").innerHTML = this.skills[e][0], document.getElementById(this.panelName + "_skill2").innerHTML = this.skills[e][1]
};
var isOpera = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
    isFirefox = "undefined" != typeof InstallTrigger,
    isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0,
    isIE = !!document.documentMode,
    isEdge = !isIE && !!window.StyleMedia,
    isChrome = !!window.chrome && !!window.chrome.webstore,
    isBlink = (isChrome || isOpera) && !!window.CSS;
new ScrollMagic.Scene({
    duration: 4e3,
    offset: 250
}).setPin("#titleDiv", {
    pushFollowers: !1
}).addTo(controller);
var intro_fade = TweenMax.to("#introText", 1, {
    opacity: 0
});
new ScrollMagic.Scene({
    duration: 200,
    offset: 265
}).setTween(intro_fade).addTo(controller);
var period_tween;
period_tween = isChrome ? TweenMax.to("#titlePeriod", 1, {
    x: -181,
    y: -36,
    rotation: 0
}) : TweenMax.to("#titlePeriod", 1, {
    x: -185,
    y: -36,
    rotation: 0
}), new ScrollMagic.Scene({
    duration: 270,
    offset: 538
}).setTween(period_tween).addTo(controller);
var t_fade = TweenMax.to("#titleT", 1, {
    opacity: 0,
    fontSize: 50
});
new ScrollMagic.Scene({
    duration: 100,
    offset: 542
}).setTween(t_fade).addTo(controller);
var e_fade = TweenMax.to("#titleE", 1, {
    opacity: 0,
    fontSize: 50
});
new ScrollMagic.Scene({
    duration: 100,
    offset: 583
}).setTween(e_fade).addTo(controller);
var h_fade = TweenMax.to("#titleH", 1, {
    opacity: 0,
    fontSize: 50
});
new ScrollMagic.Scene({
    duration: 100,
    offset: 636
}).setTween(h_fade).addTo(controller);
var c_shrink = TweenMax.to("#titleC", 1, {
    fontSize: "80pt"
});
new ScrollMagic.Scene({
    duration: 50,
    offset: 757
}).setTween(c_shrink).addTo(controller);
var idsz = ["#aplogo","#bmlogo", "#mslogo", "#antlogo"],
    classesz = ["apple","briefme", "microsoft", "antengo"],
    textz = ['Currently working as Hardware Engineering Intern','Conducted research relating to the design of a software defined radio based reciver attached to a quadcopter to track animals tagged with radio collars. Published my work with my PI\'s to an IEEE confrence on communication.', "Worked in the chemistry lab working on the analytical equipment. Built up a prep HPLC and designed a workflow for efficient solvent use", "Worked on building a course about Arduino, I focused on GPS related topics and data streams."],
    datesz = ["January 2017 - Present", "June 2016 - August 2016", "November 2013 - September 2015", "June 2015 - Sepetember 2015"],
    skillsz = [
         ["Hardware Architecture&nbsp;&nbsp;&nbsp;&nbsp;System Validation&nbsp;&nbsp;&nbsp;&nbsp;PCB Bring Up", "Microcontroller Firmware"],
        ["GNU Radio&nbsp;&nbsp;&nbsp;&nbsp;Antenna Design&nbsp;&nbsp;&nbsp;&nbsp;SDR", " RF System Design"],
        ["HPLC&nbsp;&nbsp;&nbsp;&nbsp;LCMS&nbsp;&nbsp;&nbsp;&nbsp;PHP",""],
        ["C&nbsp;&nbsp;&nbsp;&nbsp;Python", "&nbsp;&nbsp;&nbsp;&nbsp;Soldering "]
    ],
    expLogoBar = new LogoBar(idsz, classesz, textz, datesz, skillsz, "exp", [], []),
    ids = ["#snslogo", "#overdrivelogo"],
    classes = ["sns", "overdrive"],
    text = ["Designed a system consisting of metering pumps which dispenses specific amounts of liquids to create a mixed drink. To control the system an user connects to the webapp.","This project was created for our intro to engineering class. We were asked to make a robot that would complete a task powered by an arduino for under $35.We designed a robot that would pick up a soda can, then take it to a location and drop it, essentially recycling it."],
    dates = ["June 2015", "April 2016"],
    skills = [
        ["PCB Design &nbsp;&nbsp;&nbsp;&nbsp;Laser Cutting", "MEAN Stack&nbsp;&nbsp;&nbsp;&nbsp;Raspberry Pi"],
        ["Solidworks&nbsp;&nbsp;&nbsp;&nbsp;Rapid Prototpying", "Arduino&nbsp;&nbsp;&nbsp;&nbsp;Laser Cutting"],
        
    ],
    titles = ["eMIXER", "Recycle Bot"],
    awards = ["", "", "", "", ""],
    projLogoBar = new LogoBar(ids, classes, text, dates, skills, "proj", titles, awards),
    interests = ["snow", "hike", "volley", "games", "cook", "eat"],
    hasVid = [],
    intrCont = new IntrController(interests, hasVid);
IntrController.prototype.intrClick = function(e) {
    if (e != this.state) {
        for (var t = 0; t < this.interests.length; t++) t == e ? (document.getElementById("like_" + this.interests[t]).style.visibility = "visible", document.getElementById("intr_panel").className = "centric panel " + this.interests[t], -1 != this.hasVid.indexOf(this.interests[t]) && (document.getElementById(this.interests[t] + "_vid").style.visibility = "visible")) : (document.getElementById("like_" + this.interests[t]).style.visibility = "hidden", -1 != this.hasVid.indexOf(this.interests[t]) && (document.getElementById(this.interests[t] + "_vid").style.visibility = "hidden"));
        this.state = e
    }
};