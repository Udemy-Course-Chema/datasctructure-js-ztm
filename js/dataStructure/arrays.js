/**
 * lookup -> O(1)
 * push -> O(1)
 * insert -> O(n)
 * delete -> O(n)
 */

const arr = ['a','b','c','d'];
// 4 * 4 = 16 bytes of storage

// push
arr.push('e');
// pop

// unshift -> O(n / 2) -> O(1)
arr.unshift( 'x' );

// splice -> O(n)

// arr.splice( 2 );
// arr.splice( 2, 1 );
arr.splice( 2, 1, 'aliens' ); 

console.log( arr );
