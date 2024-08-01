document.addEventListener("DOMContentLoaded", () => {

    const dataMap = {
        '/characters.html': 'data/characterData.json',
        '/food.html': 'data/foodData.json',
        '/weathers.html': 'data/weatherData.json',
        '/locations.html': 'data/locationData.json',
        '/slimes.html': 'data/slimeData.json',
        '/toys.html': 'data/toyData.json'
    };

    const path = window.location.pathname;
    const dataUrl = dataMap[path];

    if (dataUrl) {
        fetch(dataUrl)
            .then(response => response.json())
            .then(data => {
                generateCards(data);
            })
            .catch(error => console.error(`Error fetching ${path} data:`, error));
    } else {
        console.error(`No data URL found for ${path}`);
    }
});

function generateCards(infos) {
    const container = document.getElementById('cardContainer');

    infos.forEach((info, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${info.name}</h3>
            <img src="${info.image}" alt="${info.name}">
            <p>${info.description}</p>
        `;

        /*if (index === infos.length - 2) {
            card.style.gridColumn = '2';
        } else if (index === infos.length - 1) {
            card.style.gridColumn = '3';
        }*/

        container.appendChild(card);
    });
}
