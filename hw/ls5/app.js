// inventory = {
//     gold: 500,
//     pouch: ['flint', 'twine', 'gemstone'],
//     backpack: ['xylophone', 'dagger', 'bedroll', 'bread loaf']
// }

// inventory['pocket'] = ["seashell", "strange berry", "lint"];
// delete inventory.backpack[1];
// inventory['gold'] += 50;
// delete inventory['pouch'];

//Fix under this line
// const inventory = {
//     gold: 500,
//     pouch: ['flint', 'twine', 'gemstone'],
//     backpack: ['xylophone', 'dagger', 'bedroll', 'bread loaf']
// }

// const pocket = ["seashell", "strange berry", "lint"];
// inventory.pocket = pocket;

// for (let i = 0; i < backpack.length; i++) {
//     if (backpack[i] === 'dagger') {
//         inventory.backpack.splice(1, 1);
//     }
// }

// inventory.gold += 50;

// delete inventory.pouch;

// console.log(inventory);

//skip

// function getBudgets(arr) {
// }
// let sum = 0;

// for (let people of arr) {
//     sum += people.budget;
// }
// return sum;

// getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve", age: 32, budget: 40000 },
//     { name: "Martin", age: 16, budget: 2700 }
// ])

//skip

// function greeting(name) {
//     const GUEST_LIST = {
//         Randy: "Germany",
//         Karla: "France",
//         Wendy: "Japan",
//         Norman: "England",
//         Sam: "Argentina"
//     }

//     if (GUEST_LIST !== undefined) {
//         return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
//     }
//     return "Hi! I'm a guest."
// }

//skip

// function keyAndValue(obj) {
//     // let keys = [];
//     // let values = [];

//     // for (let key in obj) {
//     //     key.push(keys);
//     //     values.push(obj[key]);
//     // }

//     let key = Object.key(obj);
//     let value = Object.value(obj);

//     return [key, value];
// }

//skip

function inkLevels(obj) {
    let min = Number.MAX_VALUE;

    for (let key in obj) {
        if (obj[key] < min) {
            min = obj[key];
        }
    }

    return min;
}

inkLevels({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
})
