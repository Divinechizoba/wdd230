// Function to switch to grid view
function switchToGridView() {
    const memberDirectory = document.getElementById('member-directory');
    memberDirectory.classList.remove('list-view');
    memberDirectory.classList.add('grid-view');
}

// Function to switch to list view
function switchToListView() {
    const memberDirectory = document.getElementById('member-directory');
    memberDirectory.classList.remove('grid-view');
    memberDirectory.classList.add('list-view');
}

// Add event listeners to the buttons
document.getElementById('grid-view-button').addEventListener('click', switchToGridView);
document.getElementById('list-view-button').addEventListener('click', switchToListView);