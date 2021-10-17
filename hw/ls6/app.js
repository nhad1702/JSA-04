// const members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
// ];
// // console.log(members);

// let newMem = [];
// for (var i of members) {
//     if (i.gender !== 'female') {
//         newMem.push(i);
//     }
// }
// console.log(newMem);

// function diffArray(arr1, arr2) {
//     var difNum = [];
//     for (var i in diffArray) {
//         if (arr1[i] !== arr2[i]) {
//             difNum.push(i);
//         }
//     }
//     return difNum;
// }

//or

// function dif(arr1, arr2) {
//     return [
//         ...arr1.filter(x => !arr2.includes(x)),
//         ...arr2.filter(x => !arr1.includes(x))
//     ]
// }

// console.log(dif([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// function sumMinimums(arr) {
//     let newNum = [];
//     for (var i in sumMinimums[arr]) {
//         if (i == Math.min[arr]) {
//             newNum.push[i];
//         }
//     }
//     let sum = [];
//     sum += newNum;
//     return sum;
// }

// sumMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100]
// ]);
//Còn hơi mơ mơ =))

function freeShipping(arr) {
    // for (i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }

    let sum = 0;
    for (let total of sum) {
        sum += total[i];
        if (sum > 50) {
            return true;
        } else {
            return false;
        }
    }
}

freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 });
freeShipping({ "Flatscreen TV": 399.99 });
freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 });