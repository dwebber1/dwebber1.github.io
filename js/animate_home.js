// global controller init in index.html
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

// pin title
new ScrollMagic.Scene({
    duration: 4000,
    offset: 250
})
.setPin("#titleDiv", {pushFollowers:false})
.addTo(controller);

// fade intro text
var intro_fade = TweenMax.to("#introText", 1, {opacity:0})
new ScrollMagic.Scene({
    duration: 200,
    offset: 265
})
.setTween(intro_fade)
.addTo(controller);

// period translation
var period_tween;
if (isChrome)
    period_tween = TweenMax.to("#titlePeriod", 1, {x:-181, y:-36, rotation:0});
else {
    period_tween = TweenMax.to("#titlePeriod", 1, {x:-185, y:-36, rotation:0});
}
new ScrollMagic.Scene({
    duration: 270,
    offset: 538
})
.setTween(period_tween)
.addTo(controller);

// t fade to hidden
var t_fade = TweenMax.to("#titleT", 1, {opacity:0, fontSize:50});
new ScrollMagic.Scene({
    duration: 100,
    offset: 542
})
.setTween(t_fade)
.addTo(controller);

// e fade to hidden
var e_fade = TweenMax.to("#titleE", 1, {opacity:0, fontSize:50});
new ScrollMagic.Scene({
    duration: 100,
    offset: 583
})
.setTween(e_fade)
.addTo(controller);

// h fade to hidden
var h_fade = TweenMax.to("#titleH", 1, {opacity:0, fontSize:50});
new ScrollMagic.Scene({
    duration: 100,
    offset: 636
})
.setTween(h_fade)
.addTo(controller);

// shrink c, end in logo
var c_shrink = TweenMax.to("#titleC", 1, {fontSize:"80pt"});
new ScrollMagic.Scene({
    duration: 50,
    offset: 757
})
.setTween(c_shrink)
.addTo(controller);
