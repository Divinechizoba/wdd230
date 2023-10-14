// Declare a constant variable named "url" with the JSON resource URL
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a constant variable named "cards" that selects the HTML div element with the id "cards"
const cards = document.querySelector('#cards');

// Create an asynchronous function named "getProphetData" to fetch data from the JSON source URL
const getProphetData = async () => {
    try {
        // Fetch data from the JSON source URL
        const response = await fetch(url);

        // Convert the response to a JSON object and store it in the "data" variable
        const data = await response.json();

        // Output the data as a table in the console
        console.table(data);

        // Call the "displayProphets" function with the "data.prophets" argument
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the "getProphetData" function to initiate the data retrieval
getProphetData();

// Define a function expression named "displayProphets" to build cards for each prophet
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create a section element and store it in a variable named "card"
        let card = document.createElement('section');

        // Create an h2 element and store it in a variable named "fullName"
        let fullName = document.createElement('h2');

        // Create an img element and store it in a variable named "portrait"
        let portrait = document.createElement('img');

        // Populate the heading element with the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;


        // Build the image element by setting attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name.first} ${prophet.name.last}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200'); // Set the width as desired
        portrait.setAttribute('height', '300'); // Set the height as desired

        // Append the "fullName" and "portrait" elements to the "card" section
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Add the "card" section to the "cards" div
        cards.appendChild(card);
    });
};
