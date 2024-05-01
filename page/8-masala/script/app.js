let word3 = +prompt("Hohlagan raqam  kiriting: ");
let word2 = +prompt("Hohlagan raqam  kiriting: ");
let word4 = +prompt("Hohlagan raqam  kiriting: ");
let word1 = +prompt("Hohlagan raqam  kiriting: ");
let word5 = +prompt("Hohlagan raqam  kiriting: ");

let array = [];

array.push(word1);
array.push(word2);
array.push(word3);
array.push(word4);
array.push(word5);

let sum = 0;
let i = 0;

while (i < array.length) {
    sum += Math.abs(array[i]);
    i++;
}

document.write(sum);