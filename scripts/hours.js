const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const today = new Date()
const dayOfWeek = daysOfWeek[today.getDay()]

const dayEls = document.getElementsByClassName(dayOfWeek)
for (let i = 0; i < dayEls.length; i++) {
    dayEls[i].style.fontWeight = "600"
    dayEls[i].style.color = "#19191d"
    dayEls[i].style.background = "#d8d0c3"
}

function drawHours(hours) {
    for (let i = 0; i < daysOfWeek.length; i++) {
        document.getElementById(`store-${daysOfWeek[i].toLowerCase()}-hours`).textContent = hours.storeHours[i]
        document.getElementById(`delivery-${daysOfWeek[i].toLowerCase()}-hours`).textContent = hours.deliveryHours[i]
    }
}

fetch('hours.json').then(h => h.text()).then(h => {
    const json = JSON.parse(h)
    drawHours(json)
})

// const month = today.toLocaleDateString("en-US", {month: "2-digit"})
// const date = today.toLocaleDateString("en-US", {day: "2-digit"})
// var datesOfWeek = []

// for (let i = 0; i < 7; i++) {
//     let date = new Date()
//     date.setDate(date.getDate() - date.getDay() + i)
//     let month = date.getMonth() + 1 // 0-indexed, so add 1
//     let day = date.getDate()
//     // document.querySelectorAll(`.${daysOfWeek[i]}.date`)[0].textContent = month + "/" + day
//     // document.querySelectorAll(`.${daysOfWeek[i]}.date`)[1].textContent = month + "/" + day
//     datesOfWeek.push(month + "/" + day)
// }