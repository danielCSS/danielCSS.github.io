// leetCode 119. Pascal's Triangle II

const getNextRow = (prev) => {
    const next = [];
    for(let i=0;i<prev.length -1;i++) {
      next.push(prev[i] + prev[i+1])
    }
    return [1, ...next, 1];
  };
  
  const getPascalRow = (k) => {
    if(k == 1) return [1];
    let row = [1,1];
    
    while(k > 1) {
      row = getNextRow(row);
      k--;
    }
    return row;
  };


  /**
 * @param {string} s
 * @return {number}
 * leetCode 409. Longest Palindrome
 */
var longestPalindrome = function(s) {
    const obj = {};
    let count = 0;
    let hasOdd = false;
    // first pass: create hashmap
    for(let i=0;i<s.length;i++) {
        const letter = s[i];
        if(obj[letter]) {
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    }
    // second pass: scan hashmap
    for(l in obj) {
        if(obj[l] % 2 === 1) hasOdd = true;
        count += Math.floor(obj[l] / 2) * 2; 
    }
    return hasOdd ? count + 1 : count;
};

// write myMap function
const myMap = (arr, fn) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]))
  }
  return newArr;
}

// myMap([1,2,3], x => x+1);
// [2,3,4]

// write myReduce function
const myReduce = (arr, fn, seed) => {
  let acc = seed;
  for(let i=0; i< arr.length;i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}
// myReduce([1,2,3], (x,y)=>x+y)
// NaN
// myReduce([1,2,3], (x,y)=>x+y,0)
// 6
