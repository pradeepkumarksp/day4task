// 1.Anonymous Function:

    let duplicate = function (array) {
        return array.filter((item, index) => array.indexOf(item) === index);
    
}
let array = [1, 1, 2, 4, 4, 2];
console.log(duplicate(array));


// IIFE:

    (function (array) {
    let dup = [...new Set(array)];
    console.log(dup);
})([1, 1, 2, 4, 4, 2])
