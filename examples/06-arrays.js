const array1 = [1, 2, 3, 4, 5];
console.log(array1[0]); // 1
console.log(array1[1]); // 2
console.log(array1[2]); // 3
console.log(array1[3]); // 4    
console.log(array1[4]); // 5


array1.push(6);
console.log(array1); // [1, 2, 3, 4, 5, 6]
console.log('after remove');
array1.pop();
console.log(array1); // [1, 2, 3, 4, 5]

console.log('after splice');
array1.splice(4, 1); // removes the element at index 4
console.log(array1); // [1, 2, 4, 5]        
