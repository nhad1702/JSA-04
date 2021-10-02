let clothes = ["T-Shirt", "Sweater"];

let input = prompt(
    "Welcome to our shop, what do you want (C, R, U, D, E (exit))?"
);

if (input.toLocaleUpperCase() === "R") {
    let print = printClothe(clothes);
    console.log(print);
}

function printClothe(clothes) {
    let print = "Our items: ";
    for (let i = 0; i < clothes.length; i++) {
        print += `${clothes[i]}, `;
    }
    return print;
}

if (input.toLocaleUpperCase() === "C") {
    let add = prompt("Add an item that you want");
    clothes.push(add);
    let print1 = addClothe(clothes);
    console.log(print1);
}

function addClothe(clothes) {
    let print = "Our items: ";
    for (let i = 0; i < clothes.length; i++) {
        print += `${clothes[i]}, `;
    }
    return print;
}

if (input.toLocaleUpperCase() === "U") {
    let upt = prompt("Type an item that you want to update");
    let row = prompt("Which position you want to update");
    clothes.splice(row, 0, upt);
    clothes.splice(row + 1, 1);
    let print2 = udptClothe(clothes);
    console.log(print2);
}

function udptClothe(clothes) {
    let print = "Our items: ";
    for (let i = 0; i < clothes.length; i++) {
        print += `${clothes[i]}, `;
    }
    return print;
}

if (input.toLocaleUpperCase() === "D") {
    let del = prompt("Which position you want to delete?");
    clothes.splice(clothes.length - del + 1, 1);
    let print3 = delClothe(clothes);
    console.log(print3);
}

function delClothe(clothes) {
    let print = "Our items: ";
    for (let i = 0; i < clothes.length; i++) {
        print += `${clothes[i]}, `;
    }
    return print;
}
