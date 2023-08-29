// 1.Anonymous Function:

const inputsArray = ["level", "hello", "deed", "world", "radar", "madam"];

const palindromes = inputsArray.filter(function (input) {
    const reversed = input.split('').reverse().join('');
    return input === reversed;
});

console.log( palindromes);


// IIFE:

console.log(((arr) => {
    return arr.filter(function (word) {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });
})(["level", "hello", "deed", "world", "radar", "madam"]));



// 3.Arrow Function:

let palind = (arr) => {
    return arr.filter(function (word) {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });
}
console.log(palind(["level", "hello", "deed", "world", "radar", "madam"]))
