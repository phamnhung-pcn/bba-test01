//Bai 1
function createCharacters() {
    const character = [
        { originName: 'Mario', originLevel: 1, originHealth: 100 },
        { originName: 'Luigi', originLevel: 2, originHealth: 500 },
        { originName: 'Peach', originLevel: 3, originHealth: 1000 }
    ];
    const charactersPowerUp = character.map((attribute) => ({
        name: attribute.originName.toUpperCase(),
        level: attribute.originLevel * 2,
        health: attribute.originHealth * 3
    }));
    const possibleWinners = charactersPowerUp.filter(character => character.health > 1000);
    return { charactersPowerUp, possibleWinners };
}
const { charactersPowerUp, possibleWinners } = createCharacters();
console.log("Characters with Power-Ups:", charactersPowerUp);
console.log("Possible Winners:", possibleWinners);

// Bai 2
function printLeaderboard() {
const players = [
    { name: 'Mario', score: 1000 },
    { name: 'Luigi', score: 900 },
    { name: 'Peach', score: 750 },
    { name: 'Phong', score: 500},
    { name: 'Yoshi', score: 800}
];
players.sort((a, b) => b.score - a.score);
const createLeaderBoard = players.map((player, index) => {
    let medal = "";
    if (index === 0) {
        medal = '🥇';
    } else if (index === 1) {
        medal = '🥈';
    } else if (index === 2) {
        medal = '🥉';
    } else {
        medal = '  ';
    }
    const playerBoard = `${medal} ${index + 1}. ${player.name} - ${player.score} pts`;
    console.log(playerBoard);
});
}
printLeaderboard();

    //Cach 2 - Bai tap 2
function printLeaderboard() {
    const players = [
        { name: 'Mario', score: 1000 },
        { name: 'Luigi', score: 900 },
        { name: 'Peach', score: 750 },
        { name: 'Phong', score: 500},
        { name: 'Yoshi', score: 800}
    ];
    players.sort((a, b) => b.score - a.score);
    const medals = ['🥇', '🥈', '🥉'];
    players.forEach((player, index) => {
        let medal = ' ';
        if (index < medals.length) {
            medal = medals[index];
        }
        console.log(`${medal} ${index + 1}. ${player.name} - ${player.score} pts`);
    });
}
printLeaderboard();

