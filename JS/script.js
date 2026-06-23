const nav = document.querySelector("header ul")
const side_menu = document.querySelector(".side")
const menu_btn = document.querySelector(".menu")
const menu_links = document.querySelectorAll(".side a")
const filter = document.querySelector(".filter")
const inscriptionForm = document.getElementById('inscription-form');
const success_msg = document.querySelector(".success")
const failure_msg = document.querySelector(".failure")
const num_input = document.querySelector(".num_input")

function toggle_menu() {
    document.body.classList.toggle("overflow-y-hidden")
    side_menu.classList.toggle("-left-full")
    side_menu.classList.toggle("left-0")
}
menu_btn.addEventListener("click", toggle_menu)
menu_links.forEach(link => {
    link.addEventListener("click", toggle_menu)
})
window.addEventListener("resize", () => {
    if (window.innerWidth > 991 && side_menu.classList.contains("left-0")) {
        toggle_menu()
    }
})

inscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Formulaire soumis avec succès !");
    success_msg.classList.remove("hidden");
    setTimeout(() => {
        success_msg.classList.remove("opacity-0");
        success_msg.classList.add("opacity-100");
    }, 100);
    setTimeout(() => {
        success_msg.classList.remove("opacity-100");
        success_msg.classList.add("opacity-0");
        setTimeout(() => {
            success_msg.classList.add("hidden");
        }, 200);
    }, 3000);
});

num_input.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/(?!^\+)[^\d]/g, '');
});