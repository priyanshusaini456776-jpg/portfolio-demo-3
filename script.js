// Wait for page to load
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll(".nav-links li a");
navLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// AOS initialization for scroll animations
AOS.init({
    duration: 1000,
    once: true
});

// Theme toggle (light/dark)
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields before submitting!");
        return;
    }
    alert("Thank you for contacting us, " + name + "!");
    contactForm.reset();
});
