const rosterContainer = document.getElementById('roster-container');
const addPlayerForm = document.getElementById('add-player-form');

// Sample data
const players = [];

// Function to render the roster
function renderRoster() {
    rosterContainer.innerHTML = '';
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');

        playerCard.innerHTML = `
            <span>${player.name} - ${player.breed}</span>
            <button onclick="showPlayerDetails(${player.id})">See details</button>
            <button onclick="removePlayer(${player.id})">Remove</button>
        `;

        rosterContainer.appendChild(playerCard);
    });
}

// Function to add a new player
function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    const playerBreed = document.getElementById('playerBreed').value;
    const playerImage = document.getElementById('playerImage').value;

    const newPlayer = {
        id: players.length + 1,
        name: playerName,
        breed: playerBreed,
        image: playerImage || 'default-image-url.jpg', // Use a default image if not provided
        team: 'unassigned',
    };

    players.push(newPlayer);
    renderRoster();
}

// Function to show player details
function showPlayerDetails(playerId) {
    const player = players.find(p => p.id === playerId);
    const playerDetailsContainer = document.createElement('div');
    playerDetailsContainer.classList.add('player-details');

    playerDetailsContainer.innerHTML = `
        <p>Name: ${player.name}</p>
        <p>Breed: ${player.breed}</p>
        <p>Team: ${player.team}</p>
        <img src="${player.image}" alt="${player.name}" class="player-img">
        <button onclick="hidePlayerDetails()">Back to list</button>
    `;

    rosterContainer.appendChild(playerDetailsContainer);
}

// Function to hide player details
function hidePlayerDetails() {
    const playerDetailsContainer = document.querySelector('.player-details');
    playerDetailsContainer.remove();
}

// Function to remove a player
function removePlayer(playerId) {
    const index = players.findIndex(p => p.id === playerId);
    players.splice(index, 1);
    renderRoster();
}

// Initial rendering of the roster
renderRoster();
