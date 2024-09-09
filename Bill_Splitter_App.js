// Task 1: Calculate Tip

let bill = 200;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`Bill: $${bill}, Tip: $${tip}`);

// Task 2: Output Details

let total = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`);

// Task 3: Create a Function calculateTip

function calculateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

bill = 100;
tip = calculateTip(bill);
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill+tip}`);

// Task 4: Utilize Arrays

const bills = [275, 40, 430, 125, 555, 44];
const tips = bills.map(calculateTip);
const totals = bills.map((bill, index) => bill + tips[index]);

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);