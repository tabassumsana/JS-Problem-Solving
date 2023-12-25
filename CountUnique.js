
function countUnique(arr) {
    let i=0;
    let j=1;
    while(j<arr.length) {
        if(arr[i] != arr[j]){
            i++;
            arr[i]=arr[j];
        } 
        j++;
    }
    return i+1;
}
//O9n) linear
// Taking sorted array for this proiblem statement.
// if array is not sorted then sort is first;
console.log(countUnique([1,1,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,8,8,8,9]));
console.log(countUnique([1,2,2,3,4,4,4,5,5,5,6,6,6,7,7,8,8,8,8,8,9]));
console.log(countUnique([9,9,23,23,30,33,44,77,3,53,67,99]));