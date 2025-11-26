let slideIndex = 0

function showSlides() {
  let slides = document.getElementsByClassName("slide")
  for (const slide of slides) {
    slide.style.display = "none"
  }
  slideIndex++
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block"
  setTimeout(showSlides, 5000)
}

showSlides()