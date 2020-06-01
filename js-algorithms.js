/***Task1. Remove duplicate members from an array***/

//solution 1
function removeDuplicate(arr){
    let obj = {}; let res = [];
    for (el of arr) {
        if(!obj[el]) {
            res.push(el);
            obj[el]=true;
        }
    }
    return res;
}

//solution 2
function removeDuplicate(arr){
    return Array.from(new Set(arr));
}
//////////////////////////////////////////////////////////////

/***Task2. Reverse a string in JavaScript***/

//solution 1
function reverse(str){ 
    let res = '';
    for(let i = str.length-1;i>=0;i--) {
        res=res + str[i]
    }
    return res;
}

//solution 2
function reverse(str){ 
    return str.split('').reverse().join('');
}

/***Task 3. Find the first non repeating char in a string***/
function firstNonRepeatChar(str){
    let obj = {};
    for(let i = 0; i< str.length; i++) {
        if(obj[str[i]]) obj[str[i]]++;
        else obj[str[i]] = 1;
    }
    for(key in obj) {
        if(obj[key]===1) return key;
    }
}

/***Task 4. How will you verify a word as palindrome?***/

//solution 1
function isPalindrome(str){
    str = str.toLowerCase().replace(/\s/g,'')
    return str === str.split('').reverse().join('');
}

//solution 2
function isPalindrome(str){
    let len = Math.floor(str.length/2);
    for(let i = 0; i<len; i++) {
        if(str[i]!==str[str.length - 1 - i]) return false
    }
    return true;
}











