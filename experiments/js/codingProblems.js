// Daily Coding problem # 370

const data = [
  [1, 1570280047, "pickup"],
  [1, 1570320725, "dropoff"],
  [2, 1570321092, "pickup"],
  [3, 1570321212, "pickup"],
  [3, 1570322352, "dropoff"],
  [2, 1570323012, "dropoff"],
];

const totalTime = (times) => {
  const hash = {};
  let acc = 0;
  for (time of times) {
    if (time[0] in hash && time[2] === "dropoff") {
      acc += time[1] - hash[time[0]];
    } else {
      hash[time[0]] = time[1];
    }
  }
  return acc / 1000;
};

// Daily Coding problem # 372

/* Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Write a function that takes a natural number as input and returns the number of digits the input has.

Constraint: don't use any loops. */

const numDigits = (num) => num.toString().length;


///////////////////////////////////

// Daily Coding problem # 397

/* Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

You are given a list of jobs to be done, where each job is represented by a start time and end time. Two jobs are compatible if they don't overlap. Find the largest subset of compatible jobs.

For example, given the following jobs (there is no guarantee that jobs will be sorted):

[(0, 6),
(1, 4),
(3, 5),
(3, 8),
(4, 7),
(5, 9),
(6, 10),
(8, 11)]
Return:

[(1, 4),
(4, 7),
(8, 11)]

*/
let jobs = [[0, 6],
[1, 4],
[3, 5],
[3, 8],
[4, 7],
[5, 9],
[6, 10],
[8, 11]]

const getCompatible = jobs => {
  const jobsObject = {};
  for(let job of jobs) {
     
  }


  /////
  /*
  #401 - Easy
  This problem was asked by Twitter.

A permutation can be specified by an array P, where P[i] represents
the location of the element at i in the permutation.
For example, [2, 1, 0] represents the permutation where elements at the index 0 and 2 are swapped.

Given an array and a permutation, apply the permutation to the array.
For example, given the array ["a", "b", "c"] and the permutation [2, 1, 0],
return ["c", "b", "a"].
  */

  const permutate = (arr, permutatedIndices) => arr.map((elem, i) => arr[permutatedIndices[i]])
  
