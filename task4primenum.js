// 1.Anonymous Function:


let primenumber = function (numArray) {
    numArray = numArray.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log((numArray));

}

let numArray = [1, 3, 2, 5, 10];
primenumber(numArray);


// 2.IIFE:

(
    function (numbers) {
        numbers = numbers.filter((number) => {
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return false;
            }
            return true;
        });
        console.log(numbers);
    })([1, 3, 2, 5, 10])


// 3.Arrow Function:

let prime = (arr) => {
    arr = arr.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log((arr));

}

let arr = [1, 3, 2, 5, 10];
prime(numArray);
