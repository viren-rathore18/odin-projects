const gridContainer = document.getElementById("grid-container"); 
const reset = document.getElementById("resetBtn");
const createGrid = document.getElementById("createNewBtn");
const userInput = document.getElementById("input");
const getInput = document.getElementById('submit');


//initialise the grid
generateGrid(16);

getInput.addEventListener('click', function(e) {
    e.preventDefault();
    const inputValue = parseInt(userInput.value);
    if (isNaN(inputValue)) {
        console.log("Please enter a valid number");
    } else {
        console.log(inputValue);
        generateGrid(inputValue); // Generate grid on submit
    }
});

// Generate grid function
function generateGrid(numBox) {
    gridContainer.innerHTML = ""; // Clear existing grid
    for (let i = 0; i < numBox * numBox; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'box');
       // Set square size based on container and grid size
                square.style.width = `calc(100% / ${numBox})`;
                square.style.height = `calc(100% / ${numBox})`;
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = generateRandomColor();
        });
        gridContainer.appendChild(square);
    }
}

// Random color function
function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Reset grid function
function resetGrid() {
    gridContainer.innerHTML = "";
}

reset.addEventListener('click', resetGrid);

// Optional: Regenerate grid on "Create New" click
createGrid.addEventListener('click', function() {
    const inputValue = parseInt(userInput.value);
    if (!isNaN(inputValue)) {
        generateGrid(inputValue);
    }
});