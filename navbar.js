document.getElementById("burgerBtn").addEventListener("click", function() {
    var navButtons = document.getElementById("navButtons");
    navButtons.classList.toggle("show");
});

/* Style for the scroll to top button */
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.querySelector("#scrollToTopBtn");

    // When the button is clicked, scroll to the top of the page
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling behavior
        });
    });
});
