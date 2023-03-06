class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }
    push( item ){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    borrar( index ){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems( index ){
        for(let i = index; i < (this.length - 1); i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

}

const myArrThatIBuild = new MyArray();
myArrThatIBuild.push( 'Hello' );
myArrThatIBuild.push( 'How Are You' );
myArrThatIBuild.push( 'hello');
myArrThatIBuild.push('world');
console.log( myArrThatIBuild );
// console.log( myArrThatIBuild.get(1) );
// const lastItem = myArrThatIBuild.pop();
// console.log( "The last item to pop:",lastItem );

myArrThatIBuild.borrar(1)
console.log(" ============== DATA: DELETING ==============   " );
console.log( myArrThatIBuild );