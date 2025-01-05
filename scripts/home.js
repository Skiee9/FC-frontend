

// search bar placeholder
const inputField = document.getElementById('searchInput');
const placeholderTexts = ['Search for brands and products', 'Search for skincare and makeup'];
let currentIndex = 0;

setInterval(() => {
  // Toggle between the two placeholders
  currentIndex = (currentIndex + 1) % placeholderTexts.length;
  inputField.placeholder = placeholderTexts[currentIndex];
}, 2000); 

// Get references to elements
// Get references to the elements
// Backend URL

const BACKEND_URL = "https://vivacious-short-battery.glitch.me";
const toggleForm = document.getElementById("toggle-form");
const hoverContent = document.getElementById("hover-content");
const closeButton = document.getElementById("close-button");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

// Show the form
toggleForm.addEventListener("click", (e) => {
    e.preventDefault();
    hoverContent.style.display = "block";
});

// Hide the form
closeButton.addEventListener("click", () => {
    hoverContent.style.display = "none";
});

// Register a new user
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = signupForm.querySelector("input[placeholder='Name']").value;
    const email = signupForm.querySelector("input[placeholder='Email']").value;
    const phone = signupForm.querySelector("input[placeholder='Phone Number']").value;
    const password = signupForm.querySelector("input[placeholder='Password']").value;
    const address = signupForm.querySelector("input[placeholder='Address']").value;

    // Validate form fields
    if (!name || !email || !phone || !password || !address) {
        alert("Please fill in all fields.");
        return;
    }

    try {
        const response = await fetch(`${BACKEND_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, password, address }),
        });

        // Check if response is successful
        if (!response.ok) {
            const result = await response.json();
            alert(result.message || "Registration failed.");
            return;
        }

        const result = await response.json();
        alert(result.message || "Registration successful!");

        // Clear the form fields after successful registration
        signupForm.reset();

        if (response.ok) hoverContent.style.display = "none";
    } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred. Please try again later.");
    }
});

// Login an existing user
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = loginForm.querySelector("input[placeholder='Email']").value;
    const password = loginForm.querySelector("input[placeholder='Password']").value;

    // Validate form fields
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        const response = await fetch(`${BACKEND_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        // Check if response is successful
        if (!response.ok) {
            const result = await response.json();
            alert(result.message || "Login failed.");
            return;
        }

        const result = await response.json();
        alert(result.message || "Login successful!");

        // Clear the form fields after successful login
        loginForm.reset();

        if (response.ok) hoverContent.style.display = "none";
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again later.");
    }
});


// banner slideshow

let slideIndex = 1;
showSlides(slideIndex);

let slideInterval = setInterval(() => changeSlide(1), 3000); 
function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
         slideIndex = 1
         }

    if (n < 1) {
         slideIndex = slides.length 
        }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// cards
let currentSlideIndex = 0;
const slideIntervalTime = 7000; // Auto-slide every 3 seconds
let autoSlideInterval;

const slides = document.querySelector('.card-slides');
const cards = document.querySelectorAll('.card');
const totalSlides = Math.ceil(cards.length / 4); // Total number of slides
const dotsContainer = document.querySelector('.dots-container');

// Create dots for navigation
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('onclick', `goToSlide(${i})`);
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
}

// Function to show a specific slide
function showSlide(index) {
    const slideWidth = slides.offsetWidth / 4; // Width of a single card
    const offset = index * slideWidth * 4; // Calculate offset for 4 cards
    slides.style.transform = `translateX(-${offset}px)`;

    // Update active dot
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Function to navigate to the next slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

// Function to navigate to the previous slide
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides; // Loop to the last slide
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

// Function to go to a specific slide
function goToSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

// Start automatic slideshow
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, slideIntervalTime);
}

// Reset auto-slide timer
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Event listeners for navigation
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);


// Initialize the slideshow
startAutoSlide();

feather.replace()