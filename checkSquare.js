//checking square in another array.
// arr1 = [1,2,3,4]
// arr2 = [1,9,4,16]

 //for each element in array1 find its quare in array2.

 // for this we first make two objects having value of each element in an araay
 // then we find if for each key in one object has square in other object

 function checkSquare(arr1, arr2) {
    let map1={}, map2={};

    for(let item of arr1) {
        map1[item] = (map1[item] || 0) + 1
    }
    for(let item of arr2) {
        map2[item] = (map2[item] || 0) + 1
    }
    for(let key in map1) {
        //check for each key in map1 has key in map2
        if(!map2[key*key]) {
            return false;
        }
        // check for each value of key in map1 is equal in map2
        if(map1[key] !== map2[key * key]) {
            return false;
        }
        
    }
    return true;

 }

 console.log(checkSquare([1,2,3,4], [1,4,9,16]));
 console.log(checkSquare([1,2,4,4], [1,4,9,16]));
 console.log(checkSquare([1,2,4,4], [1,4,16,16]));