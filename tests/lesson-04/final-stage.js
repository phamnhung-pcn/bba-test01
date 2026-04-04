function findPairsDivisibleBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let j = i; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                count++;
                console.log(`(${i}, ${j}) = ${i + j}`)
            }
        }
    }
    return count;
}
const totalPairs = findPairsDivisibleBy17();
console.log(`\nTổng cộng: ${totalPairs} cặp`)

// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     for (let j = i; j <= 100; j++) {
//         if ((i + j) % 17 === 0) {
//             count++;
//             console.log(`(${i}, ${j}) = ${i + j}`);
//         }
//     }
// }
// console.log(`\nTổng cộng: ${count} cặp`);
