const dishes = [
    "Dinner plate", "Water glass", "Salad bowl",
    "Dinner plate", "Wine glass", "Spoon",
    "Spoon", "Fork", "Salad bowl", "Whiskey glass",
    "Fork", "Spoon", "Fork"
]

const dirtyGlass1 = dishes[1];
const dirtyGlass2 = dishes[4];
const dirtyGlass3 = dishes[9];


console.log("I am cleaning the following glasses:")

// Put each variable in one of the parenthesis below
console.log(dirtyGlass1);
console.log(dirtyGlass2);
console.log(dirtyGlass3);

const originals = [ "Original paper 1", "Original paper 2", "Original paper 3" ]
const copies = []  // Blank array that will contain the copies

for (const paper of originals) {
	const copy = `Copy of ${paper}`
	copies.push(copy)
}

console.log(copies)