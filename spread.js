const max = Math.max(3,2,5,4,23,43,53,56);
console.log(max);


const numbers = [1,3,2,54,32,65,45,87,56,99];
const arrMax = Math.max(...numbers);
console.log(...numbers)
console.log(arrMax);


// use spread operator to copy 
const nums = [2,1,3,4];
const nums2 = nums;
const nums3 = [...nums2, 222,33];

console.log(nums3)
nums.push(122)
console.log("n3",nums3)
console.log(nums)
