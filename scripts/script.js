const nav = document.querySelector('nav');

window.addEventListener('scroll', (evn) => {
    nav.classList.toggle('active', window.scrollY > 0);
})
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.close');
const responsiveMenu = document.querySelector('.responsiveMenu');

menuBtn.addEventListener('click', () => {
    responsiveMenu.classList.add('active');
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = '17px';
})

function removeRespMenuActive() {
    responsiveMenu.classList.remove('active');
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0px';
}


responsiveMenu.querySelectorAll('li a').forEach(link => link.addEventListener('click', removeRespMenuActive))
closeBtn.addEventListener('click', removeRespMenuActive);