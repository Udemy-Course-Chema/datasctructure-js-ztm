/**
 * RULE 3:
 * Different terms of inputs
 */

// O(2n)
function compressBoxesTwice(boxes){
    boxes.forEach(function(item){
        console.log( item );
    });

    boxes.forEach(function(item){
        console.log( item );
    })
}

// Different Input
// O(a + b)
function compressBoxesTwice(boxes, boxes2){
    boxes.forEach(function(item){
        console.log( item );
    });

    boxes2.forEach(function(item){
        console.log( item );
    })
}