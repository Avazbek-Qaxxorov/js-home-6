function minMax(massive) {

    let min = arr[1];

    let max = arr[1];

    for(let i = 0; i < massive.length; i++){

        if(massive[i] > max){

            max = arr[i];

        }
    }

    return (min, max)

}

document.write(minMax([1, 4, 5, 2, 7,9,10]))