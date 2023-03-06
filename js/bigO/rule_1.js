/**
 * RULE 1: WORST CASE
 */

const nemo = ['nemo'];
const fishes = ['dory', 'Bruce','Marlin','nemo','Gill','Bloat','Nigel','Squirt'
,'Darla','Hank'];
const large = new Array(100).fill(0);

function findNemo(array){
    for(let i = 0; i<array.length; i++ ){
        console.log( "Running" );
        if(array[i] === 'nemo'){
            console.log( 'Found it' );
        }
    }
}

findNemo(fishes);