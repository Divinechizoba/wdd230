const baseURL = 'https://divinechizoba.github.io/wdd230/';
const linksURL = 'https://divinechizoba.github.io/wdd230/data/links.json';

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Test data retrieval
            displayLinks(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Call the getLinks function to fetch JSON data
getLinks();
function displayLinks(weeks) {
    // Get the container element in your HTML where you want to insert the links
    const container = document.getElementById("lesson-titles"); // Replace with the actual element ID

    // Loop through the "weeks" array from the JSON data
    weeks.forEach((week) => {
        // Create a list element for the week
        const weekList = document.createElement("ul");
        const weekTitle = document.createElement("li");
        weekTitle.textContent = week.week;
        weekList.appendChild(weekTitle);

        // Loop through the "links" array for each week
        week.links.forEach((link) => {
            // Create list items for each link
            const linkItem = document.createElement("li");
            const linkAnchor = document.createElement("a");
            linkAnchor.href = `${baseURL}${link.url}`;
            linkAnchor.textContent = link.title;
            linkItem.appendChild(linkAnchor);
            weekList.appendChild(linkItem);
        });

        // Append the week's list to the container
        container.appendChild(weekList);
    });
}

// Call the displayLinks function to build the link menu
// Make sure to specify the appropriate container element ID
// Example: displayLinks(data);
