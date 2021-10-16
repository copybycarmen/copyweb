const btn = document.querySelector ('.menu-button')
const sidebar = document.querySelector ('.sidebar')

btn.addEventListener('click', () => {
    sidebar.classList.toggle("translate-y-full");
    sidebar.classList.toggle("hidden");
})