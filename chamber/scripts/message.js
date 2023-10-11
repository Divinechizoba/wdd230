// JavaScript for storing and displaying visit date, and implementing lazy loading
const currentDate = Date.now();

if (localStorage.getItem('lastVisitDate')) {
    const lastVisitDate = parseInt(localStorage.getItem('lastVisitDate'));
    const timeDifference = currentDate - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
        document.querySelector('.sidebar-two').innerHTML = "Back so soon! Awesome!";
    } else {
        document.querySelector('.sidebar-two').innerHTML = `You last visited ${daysDifference} day${daysDifference === 1 ? '' : 's'} ago.`;
    }
} else {
    document.querySelector('.sidebar-two').innerHTML = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem('lastVisitDate', currentDate);
