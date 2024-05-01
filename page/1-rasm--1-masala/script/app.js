let price = +prompt("Foydalanuvchi mablag'ini kiriting: ");

const narx = 700;

const vaqt = 4;

const sotibolish = 0;

const ruchkalar = 0;

do {

    if (price >= narx) {
        price -= narx;
        ruchkalar++;
        sotibolish += vaqt;
    }
} 

while (price >= narx && sotibolish < 200000);

document.write("Foydalanuvchi ", ruchkalar, " ta ruchka sotib oldi va ",  sotibolish, " kun ichida yetdi.");