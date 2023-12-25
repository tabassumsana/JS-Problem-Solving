// [count largetst sum of given number of digits digits]

function findLargest(arr, num) {
    if(num > arr.length){
        throw new Error('error');
    } else {
        let max = 0;
        for(let i=0; i<arr.length - num + 1; i++) {
            let sum = 0;
            // console.log('----------');
            for(let j=0; j< num; j++){
                // console.log(arr[i+j]);
                sum += arr[i+j];
            }
            if(sum > max) max = sum;
        }
        return max;
    }
}

console.log(findLargest([1,2,3,4,5,6,7,8], 4));
console.log(findLargest([15,42,8,2,13,54,5,6,7,8], 2));