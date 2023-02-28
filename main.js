// shadow under header when scrolled
var headerEl = document.getElementById("header")

window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.style.boxShadow = "0 0 20px black"
    } else {
        header.style.boxShadow = "0 0 0px black"
    }
}