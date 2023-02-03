// hide banner if empty or set to null or none
var bannerText = document.getElementById('banner')
var bannerWrapper = document.getElementById('banner-wrapper')

if (bannerText.textContent.trim().toLowerCase() == "none" || bannerText.textContent.trim().toLocaleLowerCase() == "null" || !bannerText.textContent.trim().length) {
    console.log("Banner is empty, hiding element")
    bannerWrapper.style.display = 'none'
}

// hide banner when clicked
function hideBanner() {
    bannerWrapper.style.display = 'none'
}

// shadow under header when scrolled
var headerEl = document.getElementById("header")

window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.style.boxShadow = "0 0 20px black"
    } else {
        header.style.boxShadow = "0 0 0px black"
    }
}