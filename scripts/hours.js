const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const today = new Date()
const dayOfWeek = daysOfWeek[today.getDay()]

function drawHours(hours) {
    for (let i = 0; i < 7; i++) {
        let tempDate = new Date()
        tempDate.setDate(tempDate.getDate() + i - 1)
        let month = tempDate.toLocaleDateString("en-US", {month: "2-digit"})
        let date = tempDate.toLocaleDateString("en-US", {day: "2-digit"})
        let weekDayNum = tempDate.getDay()
        let day = daysOfWeek[weekDayNum]
        document.querySelectorAll(`.Day${i+1}.date`).forEach(item => {item.textContent = month + "/" + date})
        document.querySelectorAll(`.Day${i+1}.day`).forEach(item => {item.textContent = day})
        let storeTimes = hours.storeHours[weekDayNum]
        let deliveryTimes = hours.deliveryHours[weekDayNum]
        if (hours[`${month}-${date}`] != undefined) {
            if (hours[`${month}-${date}`].closed) {
                document.querySelectorAll(`.Day${i+1}.day-row`).forEach(item => {item.classList.add("closed-row")})
                storeTimes = false
                deliveryTimes = false
            } else {
                if (hours[`${month}-${date}`].store != undefined && hours[`${month}-${date}`].store !== true) {
                    storeTimes = hours[`${month}-${date}`].store
                }
                if (hours[`${month}-${date}`].delivery != undefined && hours[`${month}-${date}`].delivery !== true) {
                    deliveryTimes = hours[`${month}-${date}`].delivery
                }
            }
        }
        if (!storeTimes) {
            storeTimes = hours.storeClosed
            if (i != 1) {
                document.querySelectorAll(`.Day${i+1}.day-row`)[0].classList.add("closed-row")
            }
        }
        if (!deliveryTimes) {
            deliveryTimes = hours.deliveryClosed
            if (i != 1) {
                document.querySelectorAll(`.Day${i+1}.day-row`)[1].classList.add("closed-row")
            }
        }
        document.getElementById(`store-day${i+1}-hours`).textContent = storeTimes.padEnd(hours.maxChars)
        document.getElementById(`delivery-day${i+1}-hours`).textContent = deliveryTimes.padEnd(hours.maxChars)
        if (i == 1) {
            document.querySelectorAll(`.Day${i+1}.day-row`).forEach(item => {item.classList.add("highlighted-row")})
        }
    }
}

fetch('hours.json').then(h => h.text()).then(h => {
    const json = JSON.parse(h)
    drawHours(json)
})