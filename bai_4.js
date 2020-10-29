class Animal {
    constructor(name, weight) {
        this._name = name;
        this._weight = weight;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
}

let objAnimal1 = new Animal("Elephant", 45.6);
let objAnimal2 = new Animal("chicken", 2);

objAnimal2.name = "Mouse";

function show(){
    let myAnimal1 = JSON.stringify(objAnimal1);
    console.log(`Switch an object (objAnimal1) from a string ${myAnimal1}`);
    console.log(`Object objAnimal2 after rename: ${objAnimal2.name}`);
}

show();