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

function divide(a,b,cb){
	var devideMe = a/b;
	return cb(devideMe)
}

function promisly(func){
 return function(a,b) {
   return new Promise((resolve)=> {
     return func(a,b,resolve);
   });
   // console.log(arguments)
   // var arg=arguments;
   // return new Promise((resolve)=> {
   //   return func(...arg,resolve);
   // });
 }
}
promisly(divide)(10,5).then((res)=>{
	console.log(res)
})
// promisly(devide)(1,9,8).then((res)=>{
// 	console.log(res)
// })

///////////////

function stringMe(a){
  console.log(this.name + a)
}

function callMe(context){
  stringMe.bind(context, arguments[1])();
  // stringMe(arguments[1])(); <--- this will be Codepen without bind
}

callMe({name:'daniel'},10);

// write a function bind, which binds a function to a context
// what is the difference between a class and a function
// use functions instead of classes

const obj = {
  name: 'Dan',
  printName: function() { return this.name;}
}
const obj2 = {
  name: 'Stan'
}
console.log(obj.printName());
console.log(obj.printName.bind(obj2)());

const myBind = (func, context, ...prevArs) => {
  return (...currentArgs) => {
    return func.apply(context, [...prevArgs, ...currentArgs]);
  };
};
console.log(myBind(obj2, obj.printName)());
