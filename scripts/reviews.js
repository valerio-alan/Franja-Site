let reviewIndex = 1
let count = 0

let arrows = document.getElementsByClassName("arrow")
for (const arrow of arrows) {
    arrow.style.opacity = "100%";
}

function nextReview() {
    count = 0
    let currentReviews = document.getElementsByClassName(`review${reviewIndex}`)
    for (const review of currentReviews) {
        review.style.animation = "0.5s review-out-left ease-in-out forwards, 0.5s fade-out ease-in-out forwards";
    }
    reviewIndex++
    if (reviewIndex > 4) {
        reviewIndex = 1
    }
    let nextReviews = document.getElementsByClassName(`review${reviewIndex}`)
    for (const review of nextReviews) {
        review.style.display = "flex"
        review.style.animation = "0.5s review-in-right ease-in-out forwards, 0.5s fade-in ease-in-out forwards";
    }
}

function lastReview() {
    count = 0
    let currentReviews = document.getElementsByClassName(`review${reviewIndex}`)
    for (const review of currentReviews) {
        review.style.animation = "0.5s review-out-right ease-in-out forwards, 0.5s fade-out ease-in-out forwards";
    }
    reviewIndex--
    if (reviewIndex < 1) {
        reviewIndex = 4
    }
    let nextReviews = document.getElementsByClassName(`review${reviewIndex}`)
    for (const review of nextReviews) {
        review.style.display = "flex"
        review.style.animation = "0.5s review-in-left ease-in-out forwards, 0.5s fade-in ease-in-out forwards";
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