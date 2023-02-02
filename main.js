var bannerText = document.getElementById('banner')

if (!bannerText.textContent.trim().length) {
    console.log("Banner is empty, hiding element")
    bannerText.parentNode.removeChild(bannerText)
}

window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("header").style.boxShadow = "0 0 20px #19191d"
    } else {
        document.getElementById("header").style.boxShadow = "0 0 0px #19191d"
    }
}

// remove elements on resize
var headerText = document.getElementById("header-contact-info")
var originalHeaderText = headerText.outerHTML
  
window.onresize = function() {
    if (window.innerWidth <= 900) {
        headerText.parentNode.removeChild(headerText)
    } else if (!document.getElementById("header-contact-info")) {
        document.body.insertAdjacentHTML("beforeend", originalHeaderText)
        headerText = document.getElementById("header-contact-info")
    }
}