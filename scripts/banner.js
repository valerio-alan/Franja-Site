// init banner and show if not empty
const bannerText = document.getElementById('banner-text');
const bannerLink = document.getElementById('banner-link');
const bannerWrapper = document.getElementById('banner-wrapper');

function drawBanner(banner) {
  if (banner.text) {
    setTimeout(() => {
      bannerText.innerHTML = banner.text;
      bannerWrapper.style.display = 'flex';
      if (banner.link) {
        bannerLink.setAttribute('href', banner.link);
        bannerLink.setAttribute('target', '_blank');
      }
      console.log('👁 | Banner has been loaded');
    }, 1500);
  } else {
    console.log('👁 | Banner is empty, keeping it hidden');
  }
}

// hide banner when clicked
function hideBanner() {
  bannerWrapper.style.display = 'none';
}

fetch('https://franjaapi-1-v0251088.deta.app/banner')
  .then((b) => b.text())
  .then((b) => {
    const banner = JSON.parse(b);
    drawBanner(banner);
  })
  .catch(() => {
    console.error('👁 | Banner is broken, using backup');
    fetch('franja.json')
      .then((h) => h.text())
      .then((h) => {
        const data = JSON.parse(h);
        const dataBanner = data.banner;
        drawBanner(dataBanner);
      });
  });
