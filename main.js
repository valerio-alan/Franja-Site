// hide banner if empty
var bannerText = document.getElementById('banner')

if (!bannerText.textContent.trim().length) {
    console.log("Banner is empty, hiding element")
    bannerText.parentNode.removeChild(bannerText)
}

// shadow under header when scrolled
window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("header").style.boxShadow = "0 0 20px #19191d"
    } else {
        document.getElementById("header").style.boxShadow = "0 0 0px #19191d"
    }
}