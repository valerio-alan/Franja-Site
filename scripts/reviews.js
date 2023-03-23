let reviewIndex = 1
let count = 0

let arrows = document.getElementsByClassName("arrow")
for (let i = 0; i < arrows.length; i++) {
    arrows[i].style.opacity = "100%";
}

function nextReview() {
    count = 0
    let currentReviews = document.getElementsByClassName(`review${reviewIndex}`)
    for (let i = 0; i < currentReviews.length; i++) {
        currentReviews[i].style.animation = "0.5s review-out-left ease-in-out forwards, 0.5s fade-out ease-in-out forwards";
    }
    reviewIndex++
    if (reviewIndex > 4) {
        reviewIndex = 1
    }
    let nextReviews = document.getElementsByClassName(`review${reviewIndex}`)
    for (let i = 0; i < nextReviews.length; i++) {
        nextReviews[i].style.display = "flex"
        nextReviews[i].style.animation = "0.5s review-in-right ease-in-out forwards, 0.5s fade-in ease-in-out forwards";
    }
}

function lastReview() {
    count = 0
    let currentReviews = document.getElementsByClassName(`review${reviewIndex}`)
    for (let i = 0; i < currentReviews.length; i++) {
        currentReviews[i].style.animation = "0.5s review-out-right ease-in-out forwards, 0.5s fade-out ease-in-out forwards";
    }
    reviewIndex--
    if (reviewIndex < 1) {
        reviewIndex = 4
    }
    let nextReviews = document.getElementsByClassName(`review${reviewIndex}`)
    for (let i = 0; i < nextReviews.length; i++) {
        nextReviews[i].style.display = "flex"
        nextReviews[i].style.animation = "0.5s review-in-left ease-in-out forwards, 0.5s fade-in ease-in-out forwards";
    }
}

function timer() {
    if (count >= 2000) {
        nextReview()
    } else {
        count++
    }
    setTimeout(timer, 0)
}

timer()