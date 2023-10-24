// Function to filter members by gold and silver levels
function filterGoldAndSilverMembers(data) {
    return data.members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');
}

// Function to display random spotlight members
function displayRandomSpotlightMembers(data, count) {
    const goldAndSilverMembers = filterGoldAndSilverMembers(data);

    // Shuffle the members randomly
    for (let i = goldAndSilverMembers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [goldAndSilverMembers[i], goldAndSilverMembers[j]] = [goldAndSilverMembers[j], goldAndSilverMembers[i]];
    }

    // Display up to 'count' members as advertisements
    const advertisementContainer = document.getElementById('advertisement');

    for (let i = 0; i < Math.min(count, goldAndSilverMembers.length); i++) {
        const member = goldAndSilverMembers[i];
        const memberDiv = document.createElement('div');
        memberDiv.innerHTML = `
    <h2>${member.name}</h2>
    <p>${member.address}</p>
    <p>Phone: ${member.phone}</p>
    <p><a href="${member.website}" target="_blank">Website</a></p>
`;
        advertisementContainer.appendChild(memberDiv);
    }
}

// Fetch the JSON data from the file
fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        // Call the function to display 2 to 3 random advertisement members
        displayRandomSpotlightMembers(data, 3);
    })
    .catch(error => console.error('Error loading JSON data:', error));
