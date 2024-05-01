let num = prompt("Istalgan son kiriting: ");
let result = Math.floor(Math.random()*10);
do {
    if ( num % result == 0) {
        document.write("Winner Winner Chicken Dinner" + result);
    }
    else {
        document.write("Try Again" + result);
    }
}

while (num == result)
 
document.write(result)
