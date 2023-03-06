const nemo = ['nemo'];
const everyone = ['doy','bruce','marlin','nemo','nigel','squirt','hank'];
const large = new Array(1000).fill('nemo');

function findNemo(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]=== 'nemo'){
            console.log( "Found It" );
        }
    }
}
// findNemo( large );

const findNemo2 = arr => {
    arr.forEach( item => {
        if(item === 'nemo'){
            console.log( item );
        }
    } );
}

findNemo2( everyone );
// const aVar = findNemo2( everyone );
// console.log( aVar );

const findNemo3 = arr => {
    for(let item of arr){
        if(item === 'nemo'){
            console.log( item );
        }
    }
}