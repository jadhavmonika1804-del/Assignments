let students = ["Suresh", "Mahesh", "Naresh"];
let marks = [75, 80, 82];

let updatedMarks: number[] = [];

// Add 10 marks
for (let i = 0; i < marks.length; i++) {
    updatedMarks[i] = marks[i] + 10;
}

// Calculate average
let total = 0;
for (let i = 0; i < updatedMarks.length; i++) {
    total += updatedMarks[i];
}

let average = total / updatedMarks.length;

// Output
console.log("Updated Marks:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i] + ": " + updatedMarks[i]);
}

console.log("Average Marks: " + average);