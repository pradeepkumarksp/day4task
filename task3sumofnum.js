// 1.Anonymous function:

let sumofnumbers = function (numbers) {
    
    let sum = 0;

        for (let i = 0; i < numbers.length; i++){
            sum = sum + numbers[i];

    }

    return sum ;

}

let numbers = [2, 4, 8 ,9, 6];
console.log(sumofnumbers(numbers));

// 2. IIFE:

console.log(((numbers) => {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];

    }

    return sum;

})([2, 4, 8, 9, 6]));


// 3.Arrow Function:

let sumofnum = (caps) => {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];

    }

    return sum;
}
console.log(sumofnum([2, 4, 8, 9, 6]));
