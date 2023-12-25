// sort array using recursion.

function isSorted(arr) {
    for(let i=0; i< arr.length; i++) {
        if(arr[i]>arr[i+1]) {
            return false;
        }
    }
    return true;
}

function compare(arr, i, j) {
    if(isSorted(arr)) {
        return arr;
    }
    if(arr[i] < arr[j]) {
        i++;
        j++;
        return compare(arr, i, j);
    } else {
        [arr[i],arr[j]] = [arr[j], arr[i]];
        i=0;
        j=1;
        return compare(arr, i, j);
    }
}

function sortArray(arr) {
    let i=0, j=1;
    return compare(arr, i, j);
}

console.log(sortArray([1,2,3,4,5,6,7]));
console.log(sortArray([1,12,3,24,55,16,27]));

