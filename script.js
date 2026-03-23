// game.js script for multiple games with navigation logic

// A function to initialize the game based on selected option
function startGame(gameName) {
    switch(gameName) {
        case 'Escape Tsunami':
            playEscapeTsunami();
            break;
        case 'Poppy Playtime 4':
            playPoppyPlaytime4();
            break;
        case 'Steal a Brainrot Online':
            playStealABrainrotOnline();
            break;
        case 'Swing':
            playSwing();
            break;
        default:
            console.log('Game not found');
    }
}

// Logic for Escape Tsunami
function playEscapeTsunami() {
    console.log('Starting Escape Tsunami...');
    // Add game mechanics here
}

// Logic for Poppy Playtime 4
function playPoppyPlaytime4() {
    console.log('Starting Poppy Playtime 4...');
    // Add game mechanics here
}

// Logic for Steal a Brainrot Online
function playStealABrainrotOnline() {
    console.log('Starting Steal a Brainrot Online...');
    // Add game mechanics here
}

// Logic for Swing
function playSwing() {
    console.log('Starting Swing...');
    // Add game mechanics here
}

// Dynamic navigation
document.getElementById('gameSelector').addEventListener('change', function() {
    const selectedGame = this.value;
    startGame(selectedGame);
});

// HTML structure for game selection
// <select id='gameSelector'>
//     <option value=''>Select a game</option>
//     <option value='Escape Tsunami'>Escape Tsunami</option>
//     <option value='Poppy Playtime 4'>Poppy Playtime 4</option>
//     <option value='Steal a Brainrot Online'>Steal a Brainrot Online</option>
//     <option value='Swing'>Swing</option>
// </select>