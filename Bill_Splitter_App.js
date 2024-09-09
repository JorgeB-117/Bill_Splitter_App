// Task 1: Calculate Tip

let bill = 100;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`Bill: $${bill}, Tip: $${tip}`);

// Task 2: Output Details

let total = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`);

// Task 3: Create a Function calculateTip

function calculateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bill = 100;
let tip = calculateTip(bill);
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill+tip}`);



