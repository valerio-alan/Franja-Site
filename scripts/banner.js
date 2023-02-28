// init banner and show if not empty
const bannerText = document.getElementById('banner-text')
const bannerLink = document.getElementById('banner-link')
const bannerWrapper = document.getElementById('banner-wrapper')

fetch('banner.json').then(b => b.text()).then(b => {
    const banner = JSON.parse(b)
    if (banner.text) {
        bannerText.innerHTML = banner.text
        bannerWrapper.style.display = 'flex'
        if (banner.link) {
            bannerLink.setAttribute("href", banner.link)
            bannerLink.setAttribute("target", "_blank")
        }
    } else {
        console.log("Banner is empty, hiding element")
    }
})

// hide banner when clicked
function hideBanner() {
    bannerWrapper.style.display = 'none'
}