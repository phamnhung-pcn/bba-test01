//Bai 1
const playerName = "Mario";
const currebtLives = "3";
const level = {
    level1: 25,
    level2: 30,
    level3: 45
};
const tongCoin = level.level1 + level.level2 + level.level3;
const trungBinhCoin = tongCoin / 3;
const remainCoin = tongCoin % 3;
console.log("Remaining coins: " + remainCoin);