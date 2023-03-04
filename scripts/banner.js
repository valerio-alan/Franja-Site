// init banner and show if not empty
const bannerText = document.getElementById('banner-text')
const bannerLink = document.getElementById('banner-link')
const bannerWrapper = document.getElementById('banner-wrapper')

fetch('https://franjaapi-1-v0251088.deta.app/banner').then(b => b.text()).then(b => {
    const banner = JSON.parse(b)
    if (banner.text) {
        bannerText.innerHTML = banner.text
        bannerWrapper.style.display = 'flex'
        if (banner.link) {
            bannerLink.setAttribute("href", banner.link)
            bannerLink.setAttribute("target", "_blank")
        }
        console.log("👁 | Banner has been loaded")
    } else {
        console.log("👁 | Banner is empty, keeping it hidden")
    }
}).catch(error => {
    console.error('Error:', error)
    console.error("👁 | Banner is broken, keeping it hidden")
  })

// hide banner when clicked
function hideBanner() {
    bannerWrapper.style.display = 'none'
}