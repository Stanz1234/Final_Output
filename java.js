const header = document.querySelector("header")

window.addEventListener ("scroll",function(){
    header.classList.toggle ("sticky", this.window.scrolly > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

function scrollToContacts() {
    var contactsSection = document.getElementById('contacts');
    contactsSection.scrollIntoView({ behavior: 'smooth' });
}

let sections = document.querySelectorAll('profile');
let navLinks = document.querySelectorAll('header navmenu a');

window.onscroll = () => {
    profile.forEach(sec => {
        let top = window,scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.getHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navmenu.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navmeenu a [href*='+ id +']' ).classList.add('active');

            });
        };
    });
};


const wrap = document.querySelector('.wrap');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrap.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrap.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrap.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrap.classList.remove('active-popup');
});