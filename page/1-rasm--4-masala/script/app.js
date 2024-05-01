let saturday = 0;

let sunday = 0;

let year = 0;

do {
    year++;
    if (new Date(2024,0, year).getDay() == 6) {
        
        saturday ++;
        // document.write(shanba + "Dam olish kunlari");
    }
    
    else if (new Date(2024,0, year).getDay() == 0) {
       
        sunday ++;
        // document.write("365 kuniga qoldi");
    }
}

while (year < 365 && (year === 365 || new Date(2024,0.365).getDay() !== 6));   

document.write(saturday + "da shanba dam olanish kunlari" + " hamda" +  sunday + "da yakshanba dam olish kunlari bor");