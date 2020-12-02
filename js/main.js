let burgerBtn = document.querySelector('.top__burger-btn');
let burgerMenu = document.querySelector('.top__burger');
burgerBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    burgerMenu.classList.toggle('open')
});