let reviewIndex = 0
let count = 0

function nextReview() {
    let reviews = document.getElementsByClassName("review")
    for (let i = 0; i < reviews.length; i++) {
        // reviews[i].style.display = "none"
        reviews[i].style.animation = "0.5s review-out 0s ease-in-out forwards, 0.5s fade-out 0s ease-in-out forwards";
    }
    reviewIndex++
    if (reviewIndex > reviews.length) {
        reviewIndex = 1
    }
    // reviews[reviewIndex-1].style.animation = "0.5s review-in 0s ease-in-out forwards, 0.5s fade-in 0s ease-in-out forwards";
    let nextReviews = document.getElementsByClassName(`review${reviewIndex-1}`)
    for (let i = 0; i < nextReviews.length; i++) {
        nextReviews[i].style.animation = "0.5s review-in 0s ease-in-out forwards, 0.5s fade-in 0s ease-in-out forwards";
    }
}

function timer() {
    if (count >= 1000) {
        count = 0
        nextReview()
    } else {
        count++
    }
    console.log(count)
    setTimeout(timer, 0)
}

function right() {
    count = 0
    nextReview()
}

nextReview()
timer()