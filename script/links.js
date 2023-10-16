const baseURL = 'https://divinechizoba.github.io/wdd230/'; // Replace with your GitHub Pages URL
const linksURL = 'https://divinechizoba.github.io/wdd230/data/links.json'; // Replace with your JSON file's URL



// Define the function to load and display activity links
function loadActivityLinks() {
    fetch('data/links.json') // Replace with the actual path to your JSON file
        .then(response => response.json())
        .then(data => {
            const lessonTitles = document.querySelector('.lesson-titles');
            const weeks = data.weeks;

            weeks.forEach(week => {
                const weekList = document.createElement('li');
                weekList.textContent = week.week;

                week.links.forEach(link => {
                    const linkItem = document.createElement('a');
                    linkItem.href = `${baseURL}${link.url}`;
                    linkItem.textContent = link.title;

                    const listItem = document.createElement('li');
                    listItem.appendChild(linkItem);
                    weekList.appendChild(listItem);
                });

                lessonTitles.appendChild(weekList);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the function to load and display activity links
loadActivityLinks();
