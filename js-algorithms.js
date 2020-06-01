/***Remove duplicate members from an array***/

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

/***Reverse a string***/

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

//////////////////////////////////////////////////////////////

/***Find the first non repeating char in a string***/
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

//////////////////////////////////////////////////////////////

/***Check if a word is palindrome***/

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

//////////////////////////////////////////////////////////////

/***Remove Every Vowel from a String***/

//solution 1
function removeVowels(str) {
	return str.replace(/[aeiou]/ig, '');
}

//solution 2
function removeVowels(str) {
	let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let arr = str.split('');
    let res = [];
    for(let i = 0; i<arr.length; i++) {
        if(!vowels.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res.join('');
}

//////////////////////////////////////////////////////////////

/***Create a function that returns the number of hashes and pluses in a string.***/

function hashPlusCount(str) {
	let obj = {
        '#':0,
        '+':0
    }
    for (let i=0; i<str.length; i++) {
        if(str[i]==='#') { obj['#']++ }
        if(str[i]==='+') { obj['+']++ }
    }
    return [obj['#'], obj['+']];
}

//////////////////////////////////////////////////////////////

/***Numbers to Arrays and Vice Versa***/
function toArray(num) {
	return num.toString().split('').map(el => Number(el))
}

function toNumber(arr) {
	return Number(arr.join(''));
}










