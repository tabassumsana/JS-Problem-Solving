// Divide and Conquer
// Find the index of a given no in an sorted array

//linear search and binary search

function findIndex(arr, num){
    let min = 0;
    let max = arr.length-1;
    
    while(min <= max){
        let mid = Math.floor((min+max)/2);
        if(num < arr[mid]) {
            max = mid - 1;
        } else if (num > arr[mid]) {
            min = mid + 1;
        } else {
            return mid;
        }
    }
    return min;
}

console.log(findIndex([1,2,3,4,5,6,7,8,9], 6));
console.log(findIndex([1,2,34,47,52,65,77,83,90], 77));
 