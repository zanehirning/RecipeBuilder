function displayError(message) {
    const el = document.getElementById("error-message");
    el.innerHTML = message;
    el.dataset.open = "true";
    setTimeout(() => {
        el.dataset.open="false";
        el.innerHTML = "";
    }, 4000);
}

function removeElement(el) {
    el.remove();
}

function resetElement(el) {
    el.forEach((item) => {
        item.remove();
    })  
}

function createIngredient(el) {
    if (el.value === "") {
        displayError("Please enter an ingredient");
    }
    else {
        const ingredientContainer = document.getElementById("ingredients-container");
        const ingredientItem = document.createElement("div");
        ingredientItem.setAttribute("class", "ingredients-item");
        ingredientItem.setAttribute("role", "button");
        ingredientItem.setAttribute("tabindex", "0");
        ingredientItem.setAttribute("aria-label", el.value);
        ingredientItem.setAttribute("aria-description", "Press enter or space to remove this ingredient");
        ingredientItem.innerHTML = el.value;
        ingredientItem.setAttribute('value', el.value)
        ingredientItem.addEventListener("click", () => {removeElement(ingredientItem)});
        ingredientItem.addEventListener("keypress", (e) => {
            if (e.code==="Enter" || e.code==="Space") {
                removeElement(ingredientItem);
            }
        });
        ingredientContainer.appendChild(ingredientItem);
        el.value = "";
    }
}

function createInstruction(el) {
    if (el.value === "") {
        displayError("Please enter an instruction");
    }
    else {
        const instructionContainer = document.getElementById("instructions-container");
        const instructionItem = document.createElement("div");
        instructionItem.setAttribute("class", "instructions-item");
        instructionItem.setAttribute("role", "button");
        instructionItem.setAttribute("tabindex", "0");
        instructionItem.setAttribute("aria-label", el.value);
        instructionItem.setAttribute("aria-description", "Press enter or space to remove this instruction");
        instructionItem.innerHTML = el.value;
        instructionItem.setAttribute('value', el.value)
        instructionItem.addEventListener("click", () => {removeElement(instructionItem)});
        instructionItem.addEventListener("keypress", (e) => {
            if (e.code==="Enter" || e.code==="Space") {
                removeElement(instructionItem);
            }
        });
        instructionContainer.appendChild(instructionItem);
        el.value = "";
    }
}
    

function createRecipe(name, ingredients, instructions) {
    
    recipe.title = name;
    //Not very elegant, but it works
    let recipeIngredients = [];
    for (let i = 0; i < ingredients.length; i++) {
        recipeIngredients.push(ingredients[i].getAttribute('value'));
    }
    recipe.ingredients = recipeIngredients;
    
    //Not very elegant, but it works
    let recipeInstructions = [];
    for (let i = 0; i < instructions.length; i++) {
        recipeInstructions.push(instructions[i].getAttribute('value'));
    }
    recipe.instructions = recipeInstructions;

    writeRecipeToFile(recipe)
}

//Append Ingredient
const ingredientButton = document.getElementById("ingredient-button")

ingredientButton.addEventListener("click", () => {
    el = document.getElementById("ingredient-input");
    createIngredient(el);
});

const ingredientInput = document.getElementById("ingredient-input").addEventListener("keypress", (e) => {
    if (e.code==="Enter") {
        el = document.getElementById("ingredient-input");
        createIngredient(el);
    }
});


//Append Instruction
const instructionButton = document.getElementById("instruction-button");

instructionButton.addEventListener("click", () => {
    el = document.getElementById("instruction-input");
    createInstruction(el);
});

const instructionInput = document.getElementById("instruction-input");

instructionInput.addEventListener("keypress", (e) => {
    if (e.code==="Enter") {
        el = document.getElementById("instruction-input");
        createInstruction(el);
    }
});

//Save Button
const saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", () => {
        const name = document.getElementById("recipe-name").value;
        const ingredients = document.getElementsByClassName("ingredients-item");
        const instructions = document.getElementsByClassName("instructions-item");
        if (name === "") {
            displayError("Please enter a recipe name");
        }
        else {
            createRecipe(name, ingredients, instructions);
        }      
    }
);

saveButton.addEventListener("keypress", (e) => {
    if (e.code==="Enter" || e.code==="Space") {
        const name = document.getElementById("recipe-name").value;
        const ingredients = document.getElementsByClassName("ingredients-item");
        const instructions = document.getElementsByClassName("instructions-item");
        createRecipe(name, ingredients, instructions);
    }
});


//Reset Button
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    document.getElementById("recipe-name").value = "";
    resetElement([...document.getElementsByClassName("ingredients-item")]);
    resetElement([...document.getElementsByClassName("instructions-item")]);
});

resetButton.addEventListener("keypress", (e) => {
    if (e.code==="Enter" || e.code==="Space") {
        document.getElementById("recipe-name").value = "";
        resetElement([...document.getElementsByClassName("ingredients-item")]);
        resetElement([...document.getElementsByClassName("instructions-item")]);
    }
});


//Recipe Object
let recipe = {
    title: "",
    ingredients: [],
    instructions: [],
}