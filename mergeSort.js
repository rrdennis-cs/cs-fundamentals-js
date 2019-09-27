// Takes in an array that has two sorted subarrays,
// from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) { // [1, 3, 4, 2, 5], 0, 2, 4
    var lowHalf = []; // [1, 3, 5]
    var highHalf = []; // [2, 4]

    var k = p; // 0
    var i;
    var j;

    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p; // 0 // 1 // 2 // 3 // 4
    i = 0; // 0 // 1 // 1 //
    j = 0; // 0 // 0 // 1 //

    // Repeatedly compare the lowest untaken element in lowHalf with the lowest
    // untaken element in highHalf and copy the lower of the two back into array
    while (j < highHalf.length && i < lowHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i++;
        } else {
            array[k] = highHalf[j];
            j++;
        }
        k++; // k == 4
    }

    while (i < lowHalf.length) {
        array[k] = lowHalf[i];
        i++;
        k++;
    }

    while (j < highHalf.length) {
        array[k] = highHalf[j];
        j++;
        k++;
    }

    return array;
};


var array = [1, 3, 4, 2, 5];
merge(array, 0,
    Math.floor((0 + array.length-1) / 2),
    array.length-1);
console.log("Array after merging: " + array);


// Takes in an array and recursively merge sorts it
var mergeSort = function(array, p, r) { // [3, 2, 5, 4, 6, 1], 0, 5
    if (p < r) {                           // if 0 < 5
        var mid = Math.floor((p + r) / 2); // 2
        mergeSort(array, p, mid); // [0..2] -
          // if (p < r) { // if 0 < 2
          //     var mid = Math.floor((p + r) / 2); // 1
          //
          //     mergeSort(array, p, mid); // [0..1] --
          //       if (p < r) {                           // if 0 < 1
          //           var mid = Math.floor((p + r) / 2); // 0
          //
          //           mergeSort(array, p, mid); // [0..0] * ---
          //           mergeSort(array, mid + 1, r); // [1..1] * ---
          //           merge(array, p, mid, r); // ---
          //
          //     mergeSort(array, mid + 1, r); // [2..2] * --
          //     merge(array, p, mid, r); // --
        mergeSort(array, mid + 1, r); // [3..5] -
        merge(array, p, mid, r); // -
    }
};



var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);
