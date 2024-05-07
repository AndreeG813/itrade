const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
});

const header = document.querySelector('header');

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.backgroundColor = 'rgba(0,0,0,0)'; // Set transparent background color
    } else {
        // Scrolling up
        header.style.backgroundColor = 'rgba(0,0,0,0.5)'; // Set semi-transparent background color
    }

    lastScrollTop = scrollTop;
});







