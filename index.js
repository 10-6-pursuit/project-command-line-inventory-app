const { readJSONFile } = require("./src/helper");
const {create, update, destroy, show, index, add } = require("./src/sandwichesController"); 


function run() {
    let sandwichInventory = readJSONFile("./data", "sandwiches.json");
    let shoppingCart = readJSONFile("./data", "sandwichesCart.json");
    let action = process.argv[2];
    let firstParameter = process.argv[3];
    


    switch(action) {
        case "index":
            const viewInventory = index(sandwichInventory); 
            console.log(viewInventory);
            break;
        case "show":
            const showOne = show(sandwichInventory, firstParameter)
            console.log(showOne);
            break;
        case "create":
            const createData = create(sandwichInventory, process.argv.slice(3));   
            console.log(createData);
            break;
        case "update":
            // This one has to update a property
            const updateData = update(sandwichInventory, process.argv[3], process.argv[4]);
            break;
        case "destroy":
            const delData = destroy(sandwichInventory, process.argv[3]);
            break;
        case "add":
            const addToCart = add(sandwichInventory, shoppingCart, process.argv[3]);
            break;
    }
}


run();