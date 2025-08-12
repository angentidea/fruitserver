const fruits = require("../fruits.json")

class Fruit {
    constructor(genus, name, id, family, order, nutritions) {
        this.genus = genus
        this.name = name
        this.id = id
        this.family = family
        this.order = order
        this.nutritions = nutritions
    }

    static showAll = () => {
        return fruits.map((fruit) => new Fruit(fruit))

    }

    static show = (name) => {
        const fruit = fruits.filter((fruit) => fruit.name.toLowerCase() == name)
        if(fruit.length === 1){
            return new Fruit(fruit[0])
        } else {
            throw Error("The fruit doesn't exist or there is duplication")
        }
    }
}

module.exports = {Fruit}
