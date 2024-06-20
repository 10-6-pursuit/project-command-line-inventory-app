const { writeJSONFile } = require("./helper"); 
const { nanoid } = require("nanoid");


function index(sandwiches) {
    return sandwiches.map(sandwich => sandwich.id + " " + sandwich.name);
}



function show(sandwiches, id) {
    return sandwiches.filter(sandwich => sandwich.id === id);
}

function create(sandwiches, sandwich) {
    const [ name, price ] = sandwich;
    const newSandwich = {
        id: nanoid(4), 
        name: name,
        price: price
    }
    sandwiches.push(newSandwich);
    writeJSONFile("./data/", "sandwiches.json", sandwiches)
    return sandwiches;
}

function update( sandwiches, oldName, newName) {
    for (let obj of sandwiches) {
        if (obj.name === oldName) {
            obj.name = newName;
        }
    }
    writeJSONFile("./data/", "sandwiches.json", sandwiches);
    return sandwiches;
} 

function destroy(sandwiches, name) {
    const index = sandwiches.findIndex(obj => obj.name === name);
    sandwiches.splice(index,1);
    writeJSONFile("./data/", "sandwiches.json", sandwiches);
    return sandwiches;
}

function add(sandwiches, sandwichesCart, name) {
    let addSandwich = sandwiches.find(sandwich => sandwich.name === name);
    console.log(addSandwich);

    if (sandwichesCart.length === 0) {
        addSandwich.quantity = 1;
        sandwichesCart.push(addSandwich);
        writeJSONFile("./data/", "sandwichesCart.json", sandwichesCart);
        return sandwichesCart;
    }

    for (let obj of sandwichesCart) {
        if (addSandwich.id === obj.id) {
            obj.quantity += 1;
            writeJSONFile("./data/", "sandwichesCart.json", sandwichesCart);
            return sandwichesCart;
        } else {
            addSandwich.quantity = 1;
            sandwichesCart.push(addSandwich);
            writeJSONFile("./data/", "sandwichesCart.json", sandwichesCart);
            return sandwichesCart;
        }
    }
}



module.exports = {index, show, create, update, destroy, add};


