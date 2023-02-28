const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const today = new Date()
const dayOfWeek = daysOfWeek[today.getDay()]

function drawHours(hours) {
    for (let i = 0; i < 7; i++) {
        let tempDate = new Date()
        tempDate.setDate(tempDate.getDate() + i - 1)
        let month = tempDate.toLocaleDateString("en-US", {month: "2-digit"})
        let date = tempDate.toLocaleDateString("en-US", {day: "2-digit"})
        let day = daysOfWeek[tempDate.getDay()]
        document.querySelectorAll(`.Day${i+1}.date`).forEach(item => {item.textContent = month + "/" + date})
        document.querySelectorAll(`.Day${i+1}.day`).forEach(item => {item.textContent = day})
        let storeTimes = hours.storeHours[daysOfWeek.indexOf(day)].padStart(6).padEnd(13)
        let deliveryTimes = hours.deliveryHours[daysOfWeek.indexOf(day)].padStart(6).padEnd(13)
        if (hours[`${month}-${date}`] != undefined) {
            storeTimes = hours[`${month}-${date}`].store.padStart(6).padEnd(13)
            deliveryTimes = hours[`${month}-${date}`].delivery.padStart(6).padEnd(13)
            if (hours[`${month}-${date}`].closed) {
                document.querySelectorAll(`.Day${i+1}.day-row`).forEach(item => {item.classList.add("closed-row")})
            }
        }
        document.getElementById(`store-day${i+1}-hours`).textContent = storeTimes
        document.getElementById(`delivery-day${i+1}-hours`).textContent = deliveryTimes
        if (deliveryTimes == "No Deliveries" && i != 1) {
            document.querySelectorAll(`.Day${i+1}.day-row`)[1].classList.add("closed-row")
        }
        if (i == 1) {
            document.querySelectorAll(`.Day${i+1}.day-row`).forEach(item => {item.classList.add("highlighted-row")})
        }
    }
}

fetch('hours.json').then(h => h.text()).then(h => {
    const json = JSON.parse(h)
    drawHours(json)
})