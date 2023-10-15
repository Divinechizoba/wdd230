
// Define the function to load and display member data
function loadMemberData() {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const memberDirectory = document.getElementById('member-directory');
            const members = data.members;

            // Create and display member cards or list items
            members.forEach(member => {
                const memberItem = document.createElement('div');
                memberItem.classList.add('member-item');

                // Create elements to display member information (name, address, etc.)
                const nameElement = document.createElement('h2');
                nameElement.textContent = member.name;

                const addressElement = document.createElement('p');
                addressElement.textContent = member.address;

                const phoneElement = document.createElement('p');
                phoneElement.textContent = member.phone;


                // Append the elements to the member item
                memberItem.appendChild(nameElement);
                memberItem.appendChild(addressElement);
                memberItem.appendChild(phoneElement);
                // Append other information elements as needed...

                // Append the member item to the member directory
                memberDirectory.appendChild(memberItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the function to load and display member data
loadMemberData();