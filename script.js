// 1 
for (i = 1; i < 8; i++){
    console.log(i);
}

console.log("========");

// 2
for (i = 5; i <= 25; i += 4){
    console.log(i);
}

console.log("========");

// 3a
const wizards = [
"Harry Potter", 
"Hermione Granger", 
"Ron Weasley"
];

// 3b
for (item of wizards){
    console.log(item);
};

console.log("========");

// 4a
let harryPotterMovies = 0;

// 4b 

while (harryPotterMovies < 8){
    harryPotterMovies++;
}

// 4c 
console.log(harryPotterMovies);