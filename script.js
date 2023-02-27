const nav = document.querySelector('nav');
window.addEventListener("scroll", function(){
    nav.classList.toggle("sticky", window.scrollY > 50)
});

let menu = document.querySelector('#menu-icon'),
    navitems = document.querySelector('.navItems'),
    navicons = document.querySelector('.icons');
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navitems.classList.toggle('open');
    navicons.classList.toggle('open');
};

window.onscroll= () =>{
    menu.classList.remove('bx-x');
    navitems.classList.remove('open');
    navicons.classList.remove('open');
};
