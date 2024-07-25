document.addEventListener("DOMContentLoaded", () => {
    fetch('data/slimeData.json')
        .then(response => response.json())
        .then(data => {
            console.log("Data:", data); // Log the fetched data to the console

            // Handle all slimes from the JSON data
            generateSlimeCards(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Function to generate slime cards
function generateSlimeCards(slimes) {
    const container = document.getElementById('slimeContainer'); // Get the container by ID
    
    slimes.forEach(slime => { // Loop through each slime in the data array
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${slime.name}</h3>
            <img src="${slime.image}" alt="${slime.name}">
            <p>${slime.description}</p>
        `;
        
        container.appendChild(card); // Append card to container
    });
}