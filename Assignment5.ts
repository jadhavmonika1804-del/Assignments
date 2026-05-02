const employees = [
    { name: "Alice Johnson", baseSalary: 75000, experience: 5.1, rating: 4.2 },
    { name: "Bob Smith", baseSalary: 68000, experience: 3.2, rating: 3.8 },
    { name: "Carol Davis", baseSalary: 82000, experience: 7.1, rating: 4.5 },
    { name: "David Brown", baseSalary: 90000, experience: 10.2, rating: 2.5 },
    { name: "Eva Green", baseSalary: 60000, experience: 2.4, rating: 3.5 }
];

for (let emp of employees) {
    let variablePercent = 0;
    let bonus = 0;
    let reward = 0;

    // Rating conditions
    if (emp.rating >= 4) {
        variablePercent = 15;
        bonus = 1500;
    } else if (emp.rating >= 3 && emp.rating < 4) {
        variablePercent = 10;
        bonus = 1200;
    } else {
        variablePercent = 3;
        bonus = 300;
    }

    // Extra perk
    if (emp.experience >= 5) {
        reward = 5000;
    }

    // Hike calculation
    let hike = (emp.baseSalary * variablePercent / 100) + bonus + reward;
    let hikePercent = (hike / emp.baseSalary) * 100;

    console.log(`Employee Name: ${emp.name}`);
    console.log(`Hike Amount: ${hike}`);
    console.log(`Hike %: ${hikePercent.toFixed(2)}%`);
    console.log("--------------------------");
}