const d = new Date();
let year = d.getFullYear(); 
document.getElementById("demo").innerHTML = year;

let oLastModif = document.lastModified;
document.getElementById("lastupdated").innerHTML = oLastModif;