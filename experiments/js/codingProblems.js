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
