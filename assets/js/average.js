
function findAverage(arr) {
    var temp = 0
    for (i = 0 ; i < arr.length ; i++) {
        temp =+ arr[i];
    }

    calculate = (temp / arr.length);
    return console.log(calculate);
}