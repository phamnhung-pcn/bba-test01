//Bai 1
let playerName = "Mario";
let currentLives = 3;
const level = {
    level1: 25,
    level2: 30,
    level3: 45
};

//Cach 1
const tongCoin = level.level1 + level.level2 + level.level3;
const trungBinhCoin = tongCoin / 3;
const remainCoin = tongCoin % 3;
console.log(`Average coins: ${trungBinhCoin}`);
console.log(`Remaining coins: ${remainCoin}`);

//Cach 2
const coinsLevel = [25,30,45];
console.log(`Average coins: ${(coinsLevel[0] + coinsLevel[1] + coinsLevel[2]) / coinsLevel.length}`);
console.log(`Remaining coins: ${(coinsLevel[0] + coinsLevel[1] + coinsLevel[2]) % coinsLevel.length}`);

//Cach 3
function calculateCoins(level1, level2, level3) {
    const tongCoin = level1 + level2 + level3;
    const trungBinhCoin = tongCoin / 3;
    const remainCoin = tongCoin % 3;
    return { trungBinhCoin, remainCoin };
};
const result = calculateCoins(25, 30, 45);
console.log(`Average coins: ${result.trungBinhCoin}`);
console.log(`Remaining coins: ${result.remainCoin}`);
