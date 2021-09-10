const navToggle = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const fs = require('fs');   
const fileNames = fs.readdirSync('./completed-projects');

console.log(fileNames)
