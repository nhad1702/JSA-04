// let month = prompt("Nhập một tháng");

// if (month >= 1 && month < 4) {
//     console.log("Mùa xuân")
// } else if (month >= 4 && month < 7) {
//     console.log("Mùa hạ")
// } else if (month >= 7 && month < 10) {
//     console.log("Mùa thu")
// } else if (month >= 10 && month < 13) {
//     console.log("Mùa đông")
// } else {
//     console.log("Vui lòng nhập lại")
// }

// function check(a) {
//     if (a % 2 === 0) {
//         return (true);
//     } else {
//         return (false);
//     }
// }

// for (i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

let totalEven = 0,
    totalOdd = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        totalEven += i;
    } else {
        totalOdd += i;
    }
}