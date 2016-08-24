function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

console.log("loading images");
preloadImages(["images/briefme_titleimg.png",
                "images/microsoft_titleimg.png",
                "images/antengo_titleimg.png",
                "images/cook.jpg",
                "images/door.jpg",
                "images/eat.jpg",
                "images/geisel.jpg",
                "images/glass.jpg",
                "images/games.jpg",
                "images/overdrive.jpg",
                "images/pops.jpg",
                "images/rockies.jpg",
                "images/SD.jpg",
                "images/sdhacks.jpg",
                "images/stanford.jpg",
                "images/tentfeet.jpg",
                "images/usc.jpg",
                "images/vb.jpg",
                "images/snow.jpg",
                "images/hike.jpg",
                "images/devpostlogo.png"]);
console.log("done loading images");
