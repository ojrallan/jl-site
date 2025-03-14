"use strict";
let currentIndex = 0;

const reviews = document.querySelectorAll(".review-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

//Show the current review
function showReview(index) {
  reviews.forEach((review, i) => {
    if (i === index) {
      review.style.display = "flex";
    } else {
      review.style.display = "none";
    }
  });
}

//Next Review
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview(currentIndex);
});

// Previous review
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showReview(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview(currentIndex);
}, 3000);

showReview(currentIndex);
