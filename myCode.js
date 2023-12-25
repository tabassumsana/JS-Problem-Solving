// find first pair in an array
//Check sum zero

function checkSum(arr) {
    for(let num of arr) {
        for(let j=1; j< arr.length; j++){
            if(num + arr[j] === 0) {
                return [num, arr[j]];
            }
        }
    }
}
// O(n^2) quadratic time complexity
let result = checkSum([-5,-4,-3,-2,-1,0,1,2,3,4]);
console.log(result);

function optimizedCheckSum(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    while(leftIndex < rightIndex) {
        if(arr[leftIndex] + arr[rightIndex] < 0)
            leftIndex++;
        else if (arr[leftIndex] + arr[rightIndex] > 0) {
            rightIndex--;
        } else {
            return [arr[leftIndex], arr[rightIndex]];
        }
    }
}
// O(n) Linea time complexity
let opresult = optimizedCheckSum([-5,-4,-3,-2,-1,0,1,2,3,4]);
console.log(opresult);
