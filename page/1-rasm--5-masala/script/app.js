let locat;
let day = 0;

do {
    locat = prompt("Siz qayerga abed yoki tushlik qilgani borgansiz: ");
    day = prompt("Siz u yerga necha marta borgansiz: ");
    if(locat === "evos") {
        day ;
    }
    else if (locat === "oqtepa" && day > 5) {
        day ;
    }
    else if (locat === "feed up") {
        day ;
    }
    else if (locat === "wensday") {
        day ;
    }
    else if (locat === "kfs") {
        day ;
    }
}

while (locat == "evos" && day > 5  || locat == "oqtepa" && day > 10  || 
       locat == "feed up" && day > 15 || locat == "wensday" && day > 20 || locat == "kfs" && day > 25);

document.write("Bu inson " + day + " marta " + locat + "ga borgani aniqlandi!!!");