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
    const container = document.getElementById('cardContainer');
    
    slimes.forEach((slime, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${slime.name}</h3>
            <img src="${slime.image}" alt="${slime.name}">
            <p>${slime.description}</p>
        `;
        
        // Adjust the grid-column for the last two items
        if (index === slimes.length - 2) {
            card.style.gridColumn = '2';
        } else if (index === slimes.length - 1) {
            card.style.gridColumn = '3';
        }
        
        container.appendChild(card);
    });
}