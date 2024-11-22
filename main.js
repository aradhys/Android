const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elem = document.querySelector("#image-container");
var f = document.querySelector("#fixed-image");
// elem.addEventListener("mouseenter", function(){
//     f.style.display = "block";
// })
// elem.addEventListener("mouseleave", function(){
//     f.style.display = "none";
// })

var elems = document.querySelectorAll(".baar")
elems.forEach(function (e) {
    var img = e.getAttribute("data-image")
    e.addEventListener("mouseenter", function () {
        f.style.display = "block"
        f.style.backgroundImage = `url(${img})`
        f.addEventListener("mouseenter", function () {
            f.style.display = "block";
        })
    })
    e.addEventListener("mouseleave", function () {
        f.style.display = "none"
    })
    f.addEventListener("mouseleave", function () {
        f.style.display = "none";
    })
})

var baar1 = document.querySelectorAll(".baar");
baar1.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        f.style.backgroundImage = `url(${image})`
    })
})

var loaderr = document.querySelector("#loader")
setTimeout(function () {
    loaderr.style.top = "-100%"
}, 4000)

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");

    // Do something else, like open/close menu
});
/*function openNav() {
    document.getElementById("mobile").style.width = "100%";
}
function closeNav() {
    document.getElementById("mobile").style.height = "0%";
} */

var overlayy = document.querySelector("#overlay-screen")
var burger = document.querySelector("#mobile")
var navimg = document.querySelector("nav img")
var flag = 0
burger.addEventListener("click", function () {
    if (flag == 0) {
        overlayy.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1
    }
    else{
        overlayy.style.top = '-100%'
        navimg.style.opacity = 1;
        flag = 0
    }
})
