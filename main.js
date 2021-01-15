let show = true

const menuToggle = document.querySelector('.menu-toggle');
const menuToggleON = document.querySelector('.menu-toggle-on');

menuToggleON.addEventListener ('click', () =>{
    menuToggle.classList.toggle('menu-toggle-on')
})