let sentence: string = "Java programming is fun and challenging";

// 1. Count words
let words = sentence.split(" ");
console.log("Total words:", words.length);

// 2. Reverse sentence (manual)
let reversedSentence = "";
for (let i = words.length - 1; i >= 0; i--) {
    reversedSentence += words[i];
    if (i !== 0) {
        reversedSentence += " ";
    }
}
console.log("Reversed sentence:", reversedSentence);

// 3. Capitalize without slice()
let capitalizedSentence = "";

for (let word of words) {
    let firstChar = word[0].toUpperCase();

    let rest = "";
    for (let i = 1; i < word.length; i++) {
        rest += word[i];  // manually building remaining string
    }

    capitalizedSentence += firstChar + rest + " ";
}

console.log("Capitalized sentence:", capitalizedSentence.trim());