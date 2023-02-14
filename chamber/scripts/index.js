const d = new Date();
let year = d.getFullYear(); 
document.getElementById("demo").innerHTML = year;

let oLastModif = document.lastModified;
document.getElementById("lastupdated").innerHTML = oLastModif;

<form>
  <input type="hidden" id="load-time" name="load-time" value=""></input>
</form>

// get the current date and time
var now = new Date();
// format the date and time as a string
var dateTimeString = now.toISOString();
// set the value of the hidden field to the date and time string
document.getElementById("load-time").value = dateTimeString;