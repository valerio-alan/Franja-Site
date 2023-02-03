// get current date and day of week
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const today = new Date()
const monthDay = today.toLocaleDateString("en-US", {month: "2-digit", day: "2-digit"})
const dayOfWeek = daysOfWeek[today.getDay()]
var datesOfWeek = []

for (let i = 0; i < 7; i++) {
    let date = new Date()
    date.setDate(date.getDate() - date.getDay() + i)
    let month = date.getMonth() + 1 // 0-indexed, so add 1
    let day = date.getDate()
    // document.querySelectorAll(`.${daysOfWeek[i]}.date`)[0].textContent = month + "/" + day
    // document.querySelectorAll(`.${daysOfWeek[i]}.date`)[1].textContent = month + "/" + day
    datesOfWeek.push(month + "/" + day)
}

const dayEls = document.getElementsByClassName(dayOfWeek)
for (let i = 0; i < dayEls.length; i++) {
    dayEls[i].style.fontWeight = "600"
    dayEls[i].style.color = "#19191d"
    dayEls[i].style.background = "#d8d0c3"
}