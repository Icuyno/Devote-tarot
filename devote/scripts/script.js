// Get the button and menu container elements
const menuBtn = document.getElementById("menu_btn");
const menuContainer = document.querySelector(".mobile_menu_container");

// Add a click event listener to the button
menuBtn.addEventListener("click", function() {
    // Toggle the "open" class on the menu container
    menuContainer.classList.toggle("open");
});
