// Anonymous function:

let oddnumbers = function (numbers) {
    let oddnumber = [];
    for (let number of numbers) {
        if (number % 2 != 0) {
        oddnumber.push(number)
      }
    }
    return oddnumber;
}

let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(oddnumbers(numbers));

// 2.IIFE:

console.log(((numbers) => {
    let oddnumber = [];
    for (let number of numbers) {
        if (number % 2 != 0) {
            oddnumber.push(number)
        
        }
    }
    return oddnumber;
})([2, 3, 4, 5, 6, 7, 8, 9]));


// 3.Arrow Function    
    let oddNumbers = (numbers) => {
        let oddnumber = [];
        for (let number of numbers) {
            if (number % 2 != 0) {
                oddnumber.push(number)
        }
        }
        return oddnumber;
}

console.log(oddnumbers([2, 3, 4, 5, 6, 7, 8, 9]));
