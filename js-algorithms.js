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

//////////////////////////////////////////////////////////////

/***Create a function that takes an array of numbers and returns the mean value.Round to two decimal places.***/

function mean(arr) {
	return +(arr.reduce((acc, cur) => acc + cur, 0)/arr.length).toFixed(2)
}

//////////////////////////////////////////////////////////////

/***Write a function that takes a string as an argument and returns the left most digit in the string.***/

//solution 1
function leftDigit(num) {
	return num.match(/\d/) ? +num.match(/\d/) : 'No digits in a string'
}

//solution 2
function leftDigit(num) {
    let res = num.split('').find(el => !isNaN(el));
    return res ? +res : 'No digits in a string';
}

//////////////////////////////////////////////////////////////

/***Sort an Array by String Length***/

function sortByLength(arr) {
	return [...arr].sort((a,b)=>a.length - b.length)
}

//////////////////////////////////////////////////////////////

/***Create a function that returns the number of decimal places a number (given as a string) has.***/

function getDecimalPlaces(num) {
	return num.split('.')[1] ? num.split('.')[1].length : 0
}

//////////////////////////////////////////////////////////////

/***Create a function that takes a string as input and capitalizes a letter if its 
    ASCII code is even and returns its lower case version if its ASCII code is odd.***/

function asciiCapitalize(str) {
	let res = '';
	for(let i = 0; i< str.length;i++) {
        if(str.charCodeAt(i) % 2 !== 0) {
            res += str[i].toLowerCase();
        } else {
            res += str[i].toUpperCase();
        }
        
    }
    return res;
}

//////////////////////////////////////////////////////////////

/***Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.***/

// solution 1
function maxTotal(nums) {
	return [...nums].sort((a,b)=>b-a).filter((el, index) => index <= 4).reduce((acc,cur)=>acc+cur,0)
}

// solution 2
function maxTotal(nums) {
	return [...nums].sort((a,b)=>b-a).slice(0,5).reduce((acc,cur)=>acc+cur,0);
}

// solution 3
function maxTotal(nums) {
	let arr = [...nums].sort((a,b) => b - a);
    let res = []; let sum = 0;
    for (const [index, el] of arr.entries()) {
        if(index <= 4) res.push(el);
        else break;
    }

    for (let el of res) {
        sum += el;
    }
    return sum;
}

//////////////////////////////////////////////////////////////

/******/


