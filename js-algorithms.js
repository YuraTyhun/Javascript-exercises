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

/***The smallest and largest number of repetitions of digits in the arra***/

function rep(arr) {
    let obj = new Map();
    for (let el of arr) {
        if(!obj.has(el)) {
           obj.set(el,1);
        }
        else { obj.set(el,(obj.get(el))+1);}
    }
let arrRes = Array.from(obj).sort((a,b)=>a[1]-b[1])
return {min: (arrRes[0])[0], max: (arrRes[(arrRes.length-1)])[0] }
}

//////////////////////////////////////////////////////////////

/***Create a function which adds spaces before every capital in a word. Uncapitalize the whole string afterwards***/

function capSpace(txt) {
    let arr = txt.split('');
    let index = [];
    let resArr = []; 
    for( let i=0; i<arr.length;i++) {
        if(arr[i] !== arr[i].toLowerCase()) { 
            index.push(i); 
            resArr.push(arr[i].toLowerCase());   
        } else { resArr.push(arr[i]); }
          
    }
    for(let el of index) {
        resArr[el] = ' ' + resArr[el];
}
    return resArr.join('');
}

//////////////////////////////////////////////////////////////

/***Create a function to count the number of 1s in a 2D array***/

function countOnes(matrix) {
    let res = 0;
    for (let i = 0; i<matrix.length; i++) {
        if(matrix[i].includes(1)) {
            for(let el of matrix[i]) {
                if(el === 1) {res++;}
            }
        }
    }
    return res;	
}

////////////////////////////Polyfills for array methods//////////////////////////////////

/***join()***/
Array.prototype.myJoin = function(glue) {
    let arr = this;
    let res = `${arr[0]}`;
    for(let i = 1; i<arr.length; i++) {
        res += glue + arr[i]; 
    }
    return res;
}

/***push()***/
Array.prototype.myPush = function(...args) {
    let arr = this;
    for(let i = 0; i<args.length; i++) {
        arr[arr.length] = args[i]; 
    }
    return arr.length;
}

/***pop()***/
Array.prototype.myPop = function() {
    let arr = this;
    let removedElement = arr[arr.length-1]
    if(arr.length > 0) {
        arr.length = arr.length - 1;
        return removedElement;
    }
    return;
}

/***shift()***/
Array.prototype.myShift = function() {
    let arr = this;
    let removedElement = arr[0];
    if(arr.length > 0) {
        for(let i = 0;i<arr.length;i++) {
            arr[i] = arr[i+1];
        }
        arr.length = arr.length - 1;
        return removedElement;
    }    
    return;
}

/***unshift()***/
Array.prototype.myUnshift = function(...args) {
    let arr = this;
    let oldLength = arr.length;
    if(args) {
        let count = args.length;
        arr.length = arr.length + count;
        for(let i = 0; i<oldLength;i++) {
            arr[i + count] = arr[i];
        }
        for(let j = 0;j<count;j++) {
            arr[j] = args[j]
        }
    }
    return arr.length;
}

/***forEach()***/
Array.prototype.myForEach = function(cb) {
    let arr = this;
    for(let i = 0; i< arr.length;i++) {
        cb(arr[i],i,arr);
    }
}

/***indexOf()***/
Array.prototype.myIndexOf = function(item, from = 0) {
    let arr = this;
    if(from >= arr.length) {
        return -1;
    } else {
        for(let i = from; i< arr.length;i++) {
            if(arr[i] === item) {
                return i;
            }
        }
        return -1;
    }
    
}

/***includes()***/
Array.prototype.myIncludes = function(item, from = 0) {
    let arr = this;
    if(from < 0) {
        from = arr.length + from;
    }
    for(let i = from; i<arr.length;i++) {
        if(arr[i] === item) {
           return true;
        }
     }
     return false; 
}

/***find()***/
Array.prototype.myFind = function(cb) {
    let arr = this;
    for(let i = 0; i<arr.length;i++) {
      if(cb(arr[i],i,arr)) {
        return arr[i]
      }  
    }
    return; 
}

/***filter()***/
Array.prototype.myFilter = function(cb) {
    let arr = this;
    let res = [];
    for(let i = 0; i<arr.length;i++) {
      if(cb(arr[i],i,arr)) {
        res.push(arr[i]);
      }  
    }
    return res; 
}

/***map()***/
Array.prototype.myMap = function(cb) {
    let arr = this;
    let res = [];
    for(let i = 0; i< arr.length;i++) {
        res.push(cb(arr[i],i,arr));
    }
    return res;
}

/***reduce()***/
Array.prototype.myReduce = function(cb, acc=0) {
    let arr = this;
    for(let i = 0; i < arr.length; i++) {
        acc = cb(arr[i], acc);
    }
    return acc;
}

/***fill()***/
Array.prototype.myFill = function(item, from, to) {
    let arr = this;
    if (to) {
        for(let i = from; i < to; i++) {
            arr[i] = item;
        }
    } else {
        for(let i = from; i < arr.length; i++) {
            arr[i] = item;
        }
    }
    return arr;
}

/***every()***/
Array.prototype.myEvery = function(cb) {
    let arr = this;
    if (arr.length > 0) {
        for(let i = 0; i < arr.length; i++) {
            if(!cb(arr[i],i,arr)) {
                return false;
            }
        }
    } 
    return true;
}

/***some()***/
Array.prototype.mySome = function(cb) {
    let arr = this;
    if (arr.length > 0) {
        for(let i = 0; i < arr.length; i++) {
            if(cb(arr[i],i,arr)) {
                return true;
            }
        }
    } 
    return false;
}


/***bind polyfill***/
Function.prototype.myBind = function(context,...args1) {
    let fn = this;
    return function(...args2) {
        return fn.apply(context, [...args1,...args2])
    }
}

/***Fibonacci***/
//solution with recursion
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2)
}

//solution with loop
function fibonacci(n) {
    let a = 1, b = 1, temp;
    for(let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}


/***Factorial***/
//solution with recursion
function factorial(n) {
    return n === 1 ? n : n * factorial(n-1); 
}

//solution with loop
function factorial(n) {
    let res = 1;
    for(let i = 2; i <= n; i++) {
        res *= i;
    }
    return res; 
}



















