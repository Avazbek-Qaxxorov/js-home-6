// let a = prompt("Potato so'zini kiriting: ");
// let p;
// do {
//     p = a;
//     p++
//     document.write(p);
// } while (p > 0)

// document.write(p)
function countPotatoes(string) {
    let count = 0;

    let i = 0;

    do {

        if (string.slice(i, i + 8) === "potatoes") {

            count++;
        
        }

        i++;

    } 
    while (i + 8 <= string.length);

    return count;
}

const s = prompt("potatoes so'zini kiriting: ");

document.write(countPotatoes(s));