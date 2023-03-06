
const boxes = new Array(100).fill(0);


const output = funChallenge(boxes);
console.log( output );

function funChallenge( input){
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for(let i = 0; i<input.length; i++){ // O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }

    return a // O(1)
}
/**
 * TOTAL:
 * BIG O(3 + 4n)
 */


function anotherFunction(){

}