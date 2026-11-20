const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");
const navLinks = [...document.querySelectorAll("#main-navigation a")];

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        navigation.classList.toggle("open", !isOpen);
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle.setAttribute("aria-expanded", "false");
            navigation.classList.remove("open");
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            menuToggle.setAttribute("aria-expanded", "false");
            navigation.classList.remove("open");
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            menuToggle.setAttribute("aria-expanded", "false");
            navigation.classList.remove("open");
        }
    });
}