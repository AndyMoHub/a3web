const hamburger = document.querySelector(".hamburger"); /*need access to hamburger*/
const navMen = document.querySelector(".nav-elem"); /*get access to nav menu*/

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMen.classList.toggle("active");
})

/*will also need to add an event to close the menu when clicking on one of the nav elements*/

/*will also need to add an event to close the menu when clicking on one of the nav elements*/

// document.querySelectorAll(".nav-link").forEach(n => n,
//     addEventListener("click", () => {
//         hamburger.classList.remove("active");
//         navMen.classList.remove("active");

//     }))
