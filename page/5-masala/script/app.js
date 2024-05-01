function number(massive) {

    return massive.filter(item => typeof item === 'number');

}

const mixedArray = [5, 98, "a", 64, 13, "b", 30, "c",45, 23];

const resultArray = number(mixedArray);

document.write(resultArray);