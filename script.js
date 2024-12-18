// Select DOM elements
const nav = document.querySelector(".navbar");
const navL = document.querySelector(".nav-links");
const MenuT = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a"); // Select all links in the navbar

// Toggle navbar menu on click
MenuT.addEventListener("click", () => {
    navL.classList.toggle("active");
});

// Close navbar menu when a section link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navL.classList.remove("active"); // Remove the 'active' class
    });
});

// Add scroll effect to change navbar background on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { 
        nav.classList.add("scrolled"); // Add a class when scrolled
    } else {
        nav.classList.remove("scrolled"); // Remove the class when at the top
    }
});
