let fs = require("fs");

console.log("launch");

let day01input = fs.readFileSync("day01input.txt", "utf-8").split("\r\n");

let day01 = require("./day01");


let res01 = day01(day01input);

console.log(`Day01 result = ${res01}`);