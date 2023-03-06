/**
 *  O(n^2)
 */

// Log all pairs of array 

const boxes = [1,2,3,4,5];
// const boxes = [1,2,3,4,5,6,7,8,9,10,11,12];

logAllOfArrays(boxes);


// O(n * n ) --> O(n^2)

function logAllOfArrays(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j< arr.length; j ++){
            console.log( arr[i], arr[j]);
        }
    }
}