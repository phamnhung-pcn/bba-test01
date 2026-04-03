//Bai 1
const createCharacter = [
    { originName: 'Mario', originLevel: 1, originHealth: 100 },
    { originName: 'Luigi', originLevel: 2, originHealth: 500 },
    { originName: 'Peach', originLevel: 3, originHealth: 1000 }
];
const charactersPowerUp = createCharacter.map((attribute, index) => ({
    name: attribute.originName.toUpperCase(),
    level: attribute.originLevel * 2,
    health: attribute.originHealth * 3
}));
console.log(charactersPowerUp);

//Bai 2
const printLeaderboard = [
    { playerName: 'Mario', playerScore: 1000 },
    { playerName: 'Luigi', playerScore: 900 },
    { playerName: 'Peach', playerScore: 750 },
    { playerName: 'Phong', playerScore: 500},
    { playerName: 'Yoshi', playerScore: 800}
];
printLeaderboard.sort((a, b) => b.playerScore - a.playerScore);
const createLeaderBoard = printLeaderboard.map((player, index) => {
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
    const createLeaderBoard = `${medal} ${index + 1}. ${player.playerName} - ${player.playerScore} pts`;
    console.log(createLeaderBoard)
});
