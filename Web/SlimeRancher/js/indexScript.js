document.addEventListener("DOMContentLoaded", () => {
    fetch('data/indexData.json')
        .then(response => response.json())
        .then(data => {
            console.log("Data:", data); // Log the fetched data to the console
            
            // Separate the first 3 as slimes and the next 3 as characters
            const slimes = data.slice(0, 3);
            const characters = data.slice(3, 6);
            const foods = data.slice(6, 9);
            const locations = data.slice(9, 12);
            const toys = data.slice(12, 15);
            const weathers = data.slice(15, 18);
            
            // Generate cards
            generateSlimeCards(slimes);
            generateCharacterCards(characters);
            generateFoodCards(foods);
            generateLocationCards(locations);
            generateToyCards(toys);
            generateWeatherCards(weathers);
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

// Function to generate character cards
function generateCharacterCards(characters) {
    const container = document.getElementById('characterContainer'); // Get the container by ID
    
    characters.forEach(character => { // Loop through each character in the data array
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${character.name}</h3>
            <img src="${character.image}" alt="${character.name}">
            <p>${character.description}</p>
        `;
        
        container.appendChild(card); // Append card to container
    });
}
// Function to generate food cards
function generateFoodCards(foods) {
    const container = document.getElementById('foodContainer'); // Get the container by ID
    
    foods.forEach(food => { // Loop through each slime in the data array
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${food.name}</h3>
            <img src="${food.image}" alt="${food.name}">
            <p>${food.description}</p>
        `;
        
        container.appendChild(card); // Append card to container
    });
}
    // Function to generate location cards
function generateLocationCards(locations) {
    const container = document.getElementById('locationContainer'); // Get the container by ID
    
    locations.forEach(location => { // Loop through each character in the data array
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${location.name}</h3>
            <img src="${location.image}" alt="${location.name}">
            <p>${location.description}</p>
        `;
        
        container.appendChild(card); // Append card to container
    });
}
 // Function to generate toy cards
 function generateToyCards(toys) {
    const container = document.getElementById('toyContainer'); // Get the container by ID
    
    toys.forEach(toy => { // Loop through each character in the data array
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${toy.name}</h3>
            <img src="${toy.image}" alt="${toy.name}">
            <p>${toy.description}</p>
        `;
        
        container.appendChild(card); // Append card to container
    });
}
    // Function to generate item cards
 function generateWeatherCards(weathers) {
    const container = document.getElementById('weatherContainer'); // Get the container by ID
    
    weathers.forEach(weather => { // Loop through each character in the data array
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${weather.name}</h3>
            <img src="${weather.image}" alt="${weather.name}">
            <p>${weather.description}</p>
        `;
        
        container.appendChild(card); // Append card to container
    });
}