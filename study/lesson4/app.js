let foods = ["Canh", "Com", "Tra Sua", "Che", "Chao", "Thit"];
let emptyArray = [];

console.log(foods);
let sizeOfArr = foods.length;
console.log(sizeOfArr);
console.log(foods[sizeOfArr - 1]);

foods.splice(3, 0, "Quang", "HAHAHA", "HUUU");
console.log(foods);