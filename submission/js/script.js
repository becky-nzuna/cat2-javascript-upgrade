
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
