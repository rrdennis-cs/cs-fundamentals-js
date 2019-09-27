
var quickSort = function(array, p, r) {     // [9, 7, 5, 11, 12, 2, 14, 3, 10, 6], 0, 9

    if (p < r) {                                // if 0 < 9

        var pivIdx = partition(array, p, r);        // 3 // [5, 2, 3, (6), 9, 7, 11, 12, 14, 10]

        quickSort(array, p, pivIdx - 1);            // p = 0, r = 2
        // if (p < r) {                             // if 0 < 2
        //     var pivIdx = partition(array, p, r);     // 1 // [2, 3, 5]
        //     quickSort(array, p, pivIdx - 1);         // 0, 0
        //     quickSort(array, pivIdx + 1, r);         // 2, 2
        // }
        quickSort(array, pivIdx + 1, r);      // p = 4, r = 9
        // if (p < r) { // if 4 < 9
        //     var pivIdx = partition(array, p, r);   // 6 // [{2, 3, 5, 6,} 9, 7, (10), 11, 12, 14]
        //     quickSort(array, p, pivIdx - 1);       // p = 4, r = 5
        //          if (p < r) { // if 4 < 5
        //              var pivIdx = partition(array, p, r); // 4 // [{2, 3, 5, 6, 7, 9, (10),} 11, 12, 14]
        //              quickSort(array, p, pivIdx - 1); // p = 4, r = 3
        //              quickSort(array, pivIdx + 1, r); // p = 5, r = 5
        //     quickSort(array, pivIdx + 1, r);       // p = 7, r = 9
        //          if (p < r) { // if 7 < 9
        //              var pivIdx = partition(array, p, r); // 4 // [{2, 3, 5, 6, 7, 9, (10),} 11, 12, 14]
        //              quickSort(array, p, pivIdx - 1); // p = 7, r = 3
        //              quickSort(array, pivIdx + 1, r); // p = 5, r = 5

    }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);
// Program.assertEqual(array, [2,3,5,6,7,9,10,11,12,14]);

// partition()
// pivot = rightmost element of subarray A[r]
// go through subarray left to right & compare each element with the pivot
// array[p..q-1]    group L  <=  A[r]
// array[q..j-1]    group G  >   A[r]
// array[j..r-1]    group U  ?   A[r]
// q, j = p
// for each: A[j] >  A[r] ? j++
//           A[j] <= A[r] ? swap A[j] with A[q], j++, q++
// ...A[j] === A[r]       ? swap A[r] with A[q]

const partition = (array, p, r) => { // [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6], p = 0, r = 10
    let q = p;
    for (let j = p; j < r; j++) { // j = 0, q = 0
        if (array[j] <= array[r]) {
            [ array[j], array[q] ] = [ array[q], array[j] ];
            q++;
        }
    }
    [ array[r], array[q] ] = [ array[q], array[r] ];
    return q;
};

array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length-1);
console.log("Array after partitioning: " + array);
// Program.assertEqual(q, 4);
// Program.assertEqual(array, [5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);
