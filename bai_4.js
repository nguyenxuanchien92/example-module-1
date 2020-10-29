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
let myAnimal1 = JSON.stringify(objAnimal1);

objAnimal2.name = "Mouse";

console.log(myAnimal1.toString());
console.log(`objAnimal2 after rename: ${objAnimal2.name}`);