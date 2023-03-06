class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log( `Hello, ${ this.name }, and you are ${ this.type }. Let's start the game.`);

    }
}

const player = new Player('John', 'Mage');
player.introduce();