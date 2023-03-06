

// 'Hi my name is Jose'

const phrase = 'Hi my name is Jose';

// const result = myReverse2(phrase);
// console.log( result );

// myReverse3(phrase);

function reverseFromUdemy(str){
    if(!str || str.length < 2){

    }
}

function myReverse(str){
    let count = 0;
    const arr = [];
    for(let i = 0; i<str.length; i++){
        arr.push( str[i] ); 
    }
    console.log( arr );
    let lenArr = arr.length - 1;
    const reverString = [];
    for( lenArr; lenArr >= 0; lenArr--){
        reverString.push( arr[ lenArr ]);
    }
    console.log( reverString.toString() );

}

function myReverse2(str){
    const strArr = str.split(' ') ;

    const reverseString = [];
    let strLength = strArr.length - 1 ;

    for( strLength; strLength >= 0; strLength-- ){
        reverseString.push( strArr[strLength] );
    }

    let aPagraph = ''
    for( let i = 0; i < reverseString.length; i++){
        aPagraph += reverseString[i] + " ";
    }
    return aPagraph;
} 

function myReverse3(str){
    console.log( str )
}