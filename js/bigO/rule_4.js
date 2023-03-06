/**
 * RULE 4:
 * Drop Non Dominants/Terms
 */


// O( n + n^2)
function printAllNumberPair(numbers){
    console.log( 'these are the numbers: ' );

    numbers.forEach(function(number){
        console.log( number );
    });

    console.log( 'these are their sums: ' );
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log( firstNumber + secondNumber );
        });
    })
}

const numbers = [1,2,3,4,5];
printAllNumberPair(numbers);
