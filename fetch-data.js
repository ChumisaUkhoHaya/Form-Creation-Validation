// Define an async function to fetch user data
async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is OK (status 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the existing content in dataContainer
        dataContainer.innerHTML = '';

        // Create a ul element for the user list
        const userList = document.createElement('ul');

        // Loop through the users and create li elements for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the dataContainer
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Call fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
