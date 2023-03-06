

/**
 * BIG O NOTATION
 */
/**
 * O(n!) --> HORRIBLE 
 * O(2^n) --> HORRIBLE
 * O(n^2) --> HORRIBLE
 * O(n log n) --> BAD
 * O(n) --> FAIR 
 * O(log n), O(1) --> GOOD ONE
 */

/** 
 * GOOD CODE:
 * 
 * There are two things that it be a good code:
 * 1. Readable.
 * 2. Scalable.
 *  2.1 Speed
 *  2.2 Memory (Control)
*/



const fish = ['nemo'];
// "BAD CODE"
// BIG O NOTATION : O(n) --> Linear TIME
function findNemo(arr){
    let t0 = performance.now();
    for(let i = 0; i<arr.length; i++){
        if( arr[i] === 'nemo'){
            console.log( "Found Nemo!" );
        }
    }
    let t1 = performance.now();
    console.log( 'Find Nemo Took: ' + (t1-t0) + " miliseconds" );
}

findNemo(fish);

// "GOOD CODE"

