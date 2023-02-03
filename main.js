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

// get current date and day of week
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const today = new Date()
const monthDay = today.toLocaleDateString("en-US", {month: "2-digit", day: "2-digit"})
const dayOfWeek = daysOfWeek[today.getUTCDay()]
var datesOfWeek = []

for (let i = 0; i < 7; i++) {
    let date = new Date()
    date.setDate(date.getDate() - date.getDay() + i)
    let month = date.getMonth() + 1 // 0-indexed, so add 1
    let day = date.getDate()
    document.querySelectorAll(`.${daysOfWeek[i]}.date`)[0].textContent = month + "/" + day
    document.querySelectorAll(`.${daysOfWeek[i]}.date`)[1].textContent = month + "/" + day
    datesOfWeek.push(month + "/" + day)
}

const dayEls = document.getElementsByClassName(dayOfWeek)
for (let i = 0; i < dayEls.length; i++) {
    dayEls[i].style.fontWeight = "900"
    dayEls[i].style.color = "#bec1cd"
}