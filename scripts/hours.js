const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const today = new Date()
const dayOfWeek = daysOfWeek[today.getDay()]

function drawHours(hours) {
    for (let i = 0; i < 7; i++) {
        let tempDate = new Date()
        tempDate.setDate(tempDate.getDate() + i - 1)
        let month = tempDate.toLocaleDateString("en-US", {month: "2-digit"})
        let date = tempDate.toLocaleDateString("en-US", {day: "2-digit"})
        let year = tempDate.toLocaleDateString("en-US", {year: "numeric"})
        let weekDayNum = tempDate.getDay()
        let day = daysOfWeek[weekDayNum]
        document.querySelectorAll(`.Day${i+1}.date`).forEach(item => {item.textContent = month + "/" + date})
        document.querySelectorAll(`.Day${i+1}.day`).forEach(item => {item.textContent = day})
        let storeTimes = hours.storeHours[day]
        let deliveryTimes = hours.deliveryHours[day]
        if (`${month}-${date}` in hours.specialHours.all || (hours.specialHours[year] != undefined && `${month}-${date}` in hours.specialHours[year])) {
            console.log(`${month}/${date} has been modified from default value for ${day}`)
            if (hours.specialHours[year] != undefined && `${month}-${date}` in hours.specialHours[year]) {
                var monthDayHours = hours.specialHours[year][`${month}-${date}`]
            } else {
                var monthDayHours = hours.specialHours["all"][`${month}-${date}`]
            }
            if (monthDayHours.closed) {
                storeTimes = false
                deliveryTimes = false
            } else {
                if (monthDayHours.store != undefined && monthDayHours.store !== true) {
                    storeTimes = monthDayHours.store
                }
                if (monthDayHours.delivery != undefined && monthDayHours.delivery !== true) {
                    deliveryTimes = monthDayHours.delivery
                }
            }
        }
        if (!storeTimes) {
            storeTimes = hours.storeClosedMsg
            if (i != 1) {
                document.querySelectorAll(`.Day${i+1}.day-row`)[0].classList.add("closed-row")
            }
        }
        if (!deliveryTimes) {
            deliveryTimes = hours.deliveryClosedMsg
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

fetch('https://franjaapi-1-v0251088.deta.app/hours').then(h => h.text()).then(h => {
    const json = JSON.parse(h)
    drawHours(json)
    console.log("👁 | Hours have been loaded")
}).catch(error => {
    console.error('Error:', error)
    console.error("👁 | Hours are broken")
  })