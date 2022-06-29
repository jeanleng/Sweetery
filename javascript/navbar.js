const close = document.querySelector('.close')
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.add('open');
    nav.classList.remove('exit');
    close.style.display = 'unset';
    hamburger.style.display = 'none';
});

close.addEventListener('click', () => {
    nav.classList.remove('open');
    nav.classList.add('exit');
    close.style.display = 'none';
    hamburger.style.display = 'unset';
});

// const header = document.querySelector('header');
// const headerColor = 'rgba(150, 150, 150, 0.9)'
// window.addEventListener('scroll', () => {
//     header.style.background = headerColor;
// });