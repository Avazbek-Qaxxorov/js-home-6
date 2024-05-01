let alphabet = [...'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let random = Math.floor(Math.random() * 26);
let randomLetter = alphabet[random];
document.write(randomLetter);


do {
    let choosenLetter = prompt("Istalgan harf kiriting: ");
    random = Math.floor(Math.random() * 26);
    randomLetter = alphabet[random];
} while(randomLetter != choosenLetter)

let numberOfRandomLetter = randomLetter.charCodeAt(0);

document.write(numberOfRandomLetter);

while(numberOfRandomLetter < 123){
    console.log(String.fromCharCode(numberOfRandomLetter));
    numberOfRandomLetter++
}
