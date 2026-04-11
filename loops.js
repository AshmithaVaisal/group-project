for (let i = 1; i <= 15; i++) {
    console.log("Number:", i);
}

let i = 1;

do {
    console.log("Count:", i);
    i++;
} while (i <= 5);

// users.js

const users = [
    { name: "Raj", age: 25 },
    { name: "Amit", age: 17 },
    { name: "Priya", age: 30 },
    { name: "John", age: 15 }
];

// Loop and print only adults (age >= 18)
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
        console.log("Adult User:", users[i].name);
    }
}
} while (i <=10);
