// function quadratic(a, b, c) {
//     let alpha = (b * b) - (4 * a * c);

//     if (alpha > 0) {
//         let first = ((-b + Math.sqrt(alpha)) / (2 * a));
//         let second = ((-b - Math.sqrt(alpha)) / (2 * a));
//         return first + " and " + second;
//     } else if (alpha == 0) {
//         let sum1 = -b / 2 * a;
//         return sum1;
//     } else {
//         return "No solution";
//     }
// }

// function pHName(a) {
//     if (a >= 0 && a < 7) {
//         return "Acid";
//     } else if (a == 7) {
//         return "Neutral";
//     } else if (a > 7 && a <= 14) {
//         return "Alkaline";
//     } else {
//         return "None";
//     }
// }

// function BMI(a, b) {
//     let div = b / ((a / 100) ** 2);

//     if (div < 18.5) {
//         return "Underweight";
//     } else if (18.5 <= div < 25) {
//         return "Normal";
//     } else if (25 <= div < 30) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }

// function isNarcissistic(a) {
//     let x = a;
//     let a1 = a % 10;
//     a = Math.floor(a / 10);
//     let a2 = a % 10;
//     a = Math.floor(a / 10);
//     let a3 = a % 10;

//     let sum = (a1 ** 3) + (a2 ** 3) + (a3 ** 3);

//     if (sum == x) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function lastDig(a, b, c) {
//     let a1 = a % 10;
//     let b1 = b % 10;
//     let c1 = c % 10;

//     let sum = a1 * b1;

//     if (sum == c1) {
//         return true;
//     } else {
//         return false;
//     }
// }