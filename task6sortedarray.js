// 1.Anonymous function:

let findmedian = function (nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}

const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];

const median = findmedian(nums1, nums2);
console.log(median);

// 2.IIFE:

const num1 = [1, 3, 5];
const num2 = [2, 4, 6];

console.log(((nums1, nums2) => {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})(nums1, nums2));



