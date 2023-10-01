const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;

let oLastModif = document.lastModified;
document.getElementById("lastupdated").innerHTML = oLastModif;

<form>
  <input type="hidden" id="load-time" name="load-time" value=""></input>
</form>

// Check if localStorage is available
if (typeof (Storage) !== "undefined") {
  // Get the current date
  const currentDate = new Date();

  // Check if there is a previous visit date in localStorage
  if (localStorage.getItem("lastVisitDate")) {
    // Retrieve the previous visit date from localStorage
    const lastVisitDate = new Date(localStorage.getItem("lastVisitDate"));

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - lastVisitDate;

    // Calculate the number of days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Display the appropriate message based on the time difference
    if (daysDifference === 0) {
      document.getElementById("message").textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
      document.getElementById("message").textContent = "You last visited 1 day ago.";
    } else {
      document.getElementById("message").textContent = `You last visited ${daysDifference} days ago.`;
    }
  } else {
    // This is the user's first visit
    document.getElementById("message").textContent = "Welcome! Let us know if you have any questions.";
  }

  // Store the current visit date in localStorage
  localStorage.setItem("lastVisitDate", currentDate.toISOString());
} else {
  // LocalStorage is not available
  console.log("LocalStorage is not supported in this browser.");
}

// get the current date and time
var now = new Date();
// format the date and time as a string
var dateTimeString = now.toISOString();
// set the value of the hidden field to the date and time string
document.getElementById("load-time").value = dateTimeString;