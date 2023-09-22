const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;

let oLastModif = document.lastModified;
document.getElementById("lastmodified").innerHTML = oLastModif;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});



