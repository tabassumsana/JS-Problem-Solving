//'hello' -> 'llheo' - true
// 'ajay' -> 'aaay' - false

// check length is same
// number of letters is same but arrangement can be different

// we will create an object containing number of each letter of a string.
function checkAnagram(str1, str2) {
    if(str1.length != str2.length) return false;

    let letterCountObj = {};
    for(let val of str1) {
        letterCountObj[val] = (letterCountObj[val] || 0) + 1;
        // another way of doing the same thing
        // if(letterCountObj.hasOwnProperty(val)){
        //     letterCountObj[val]++;
        // } else 
        //     letterCountObj[val] = 1;
    }
    for(let val of str2) {
        if(!letterCountObj[val]) {
            return false;
        }
        letterCountObj[val]--;
    }
    return true;
}

// as there is no nested loop
// O(n) linear time complexity
console.log(checkAnagram('hello', 'llleo'));