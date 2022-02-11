const maxGenCount = 10000;  // number of generations to run simulation for
const sizeX = 20;           // number of columns in currentGen[] array
const sizeY = 20;           // number of rows in currentGen[] array
const initLivingCount = 20; // initial number of living cells in currentGen[] array

let currentGenID = 0;       // initialize the generation counter for later

let currentGen = [];        // the entirety of cells (sizeX * sizeY), living and non-living
let currentLiving = [];     // the subset of currentGen[] that are living ==>> #TODO:  convert to function that returns an array
let currentNonLiving = [];  // the subset of currentGen[] that are nonliving ==>> #TODO:  convert to function that returns an array

let nextGenTransition = []; // incremental chanbges to currentGen[] array

const relativeNeighborLocations = [ // allows loop to locate neighbors to cell being evaluated
    [0, 1],     // north
    [0, -1],    // south
    [1, 0],     // east
    [-1, 0],    // west
    [1, 1],     // northeast
    [1, -1],    // southeast
    [-1, 1],    // northwest 
    [-1, -1],   // southwest
];

// build the game space (sizeX * sizeY total number of cells)
for (let i = 0; i < sizeX; i++) {
    for (let j = 0; j < sizeY; j++) {
        currentGen.push([i, j]);
    };
};

// initialize all game space as nonliving (all cells are considered non-living until next step of randomly selecting those cells that are living)
currentNonLiving = currentGen;

// set transition to bring game to life
// note that the nextGenTransition[] array will be converted from non-living to living as the first step in the while loop that follows
for (let k = 0; k < initLivingCount; k++) {
    nextGenTransition.push(currentNonLiving.splice(Math.floor(Math.random() * currentNonLiving.length), 1)[0])
}

// run the game for generationCount number of generations
while(currentGenID < maxGenCount + 1){
    // update the living[] and nonliving[] arrays from the nextGenTransition[] array
    // clear out the nextGenTransition[] arraoy to prepare for next generation
    // evaluate neighbors to determine nextGenTransition[] values
    currentGenID++;
}

console.log('Game Complete');