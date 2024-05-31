document.getElementById("burgerBtn").addEventListener("click", function() {
    var navButtons = document.getElementById("navButtons");
    navButtons.classList.toggle("show");
});

document.getElementById("homeBtn").addEventListener("click", function() {
    window.location.href = "home.html"; // Change to your home page URL
});

document.getElementById("aboutBtn").addEventListener("click", function() {
    window.location.href = "ueber_mich.html"; // Change to your Über mich page URL
});

document.getElementById("skillsBtn").addEventListener("click", function() {
    window.location.href = "skills.html"; // Change to your skills page URL
});

document.getElementById("portfolioBtn").addEventListener("click", function() {
    window.location.href = "portfolio.html"; // Change to your portfolio page URL
});

document.getElementById("contactBtn").addEventListener("click", function() {
    window.location.href = "contact.html"; // Change to your contact page URL
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
