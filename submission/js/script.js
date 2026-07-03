// Feature 1 - Add loop-rendered service cards
const services = [
    { name: "Design", description: "Identity · Print · Art Direction", image: "images/design.jpg" },
    { name: "Film", description: "Documentary · Commercial", image: "images/film.jpg" },
    { name: "Photography", description: "Editorial · Portrait", image: "images/photography.jpg" }
];

const grid = document.querySelector(".grid");

grid.innerHTML = "";

services.forEach(function(service) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${service.image}" alt="${service.name} work by Zikaron Studios" />
        <h3>${service.name}</h3>
        <p>${service.description}</p>
    `;
    grid.appendChild(card);
});

// Feature 2 - Add & Remove items
const addBtn = document.getElementById("add-btn");
const wishlistInput = document.getElementById("wishlist-item");
const wishlistList = document.getElementById("wishlist-list");

addBtn.addEventListener("click", function() {
    const itemText = wishlistInput.value;

    if (itemText === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = itemText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(removeBtn);
    wishlistList.appendChild(li);

    wishlistInput.value = "";
});

// Feature 3 - Form validation
const form = document.querySelector("form");
const feedback = document.createElement("p");
feedback.id = "form-feedback";
form.appendChild(feedback);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;
    
    if (name === "" || email === "" || message === "") {
        feedback.textContent = "Please fill in all fields before sending.";
        feedback.style.color = "#B5443A";
    } else {
        feedback.textContent = "Message sent! We will get back to you soon.";
        feedback.style.color = "#00D1B2";
    }
});

// Feature 4 - localStorage theme toggle
const themeBtn = document.getElementById("theme-btn");

// Check if user had a saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "Switch to Dark Mode";
}

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "Switch to Dark Mode";
    } else {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "Switch to Light Mode";
    }
});

// Feature 5 - Click to reveal banner caption
const banner = document.getElementById("banner");
const bannerCaption = document.getElementById("banner-caption");

banner.addEventListener("click", function() {
    bannerCaption.classList.toggle("visible");
});
