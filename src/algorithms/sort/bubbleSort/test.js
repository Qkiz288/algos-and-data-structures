const bubbleSort = require('./bubbleSort');

console.log("Not optimized bubble sort: " + bubbleSort.naiveBubbleSort([5,1,2,3,4]) + "\n");
console.log("Not optimized bubble sort: " + bubbleSort.naiveBubbleSort([3,0,1,-1,-2,-1,-1,-2,55,1,2,3,4,5,67,2,11,67,54,1,5,4,2,9,7,4,2,1,8,6,4]) + "\n");

console.log("Optimized bubble sort: " + bubbleSort.optimizedBubbleSort([5,1,2,3,4]) + "\n");
console.log("Optimized bubble sort: " + bubbleSort.optimizedBubbleSort([3,0,1,-1,-2,-1,-1,-2,55,1,2,3,4,5,67,2,11,67,54,1,5,4,2,9,7,4,2,1,8,6,4]) + "\n");

console.log("Even more optimized bubble sort: " + bubbleSort.evenMoreOptimizedBubbleSort([5,1,2,3,4]) + "\n");
console.log("Even more optimized bubble sort: " + bubbleSort.evenMoreOptimizedBubbleSort([3,0,1,-1,-2,-1,-1,-2,55,1,2,3,4,5,67,2,11,67,54,1,5,4,2,9,7,4,2,1,8,6,4]));