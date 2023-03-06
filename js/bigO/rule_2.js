/**
 * RULE 2:
 * REMOVE CONSTANT
 */

const quepedo = new Array(200).fill(100);

print100Times( quepedo );

function print100Times(items){
    console.log( items[0] );

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while( index < middleIndex){
        console.log( items[index] );
        index ++;
    }
    for ( var i = 0; i<100;i++){
        console.log( 'Hi');
    }
}

// O(1 + n/2 + 100)
// O(n/2 + 101)
// O(n + 101) -> Dropping constant -> O(n + 1)
// -> O(n)

// EXAMPLE
function compressBoxesTwice(boxes){
    boxes.forEach(function(item){
        console.log( item );
    });

    boxes.forEach(function(item){
        console.log( item );
    })
}

// O(2n) -> Horrible