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

function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("passwordMatchMessage");

    if (password !== confirmPassword) {
        message.innerHTML = "Passwords do not match.";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("password").focus();
    } else {
        message.innerHTML = "";
    }
}

function updateRatingValue() {
    var rating = document.getElementById("rating").value;
    document.getElementById("ratingValue").textContent = rating;
}


