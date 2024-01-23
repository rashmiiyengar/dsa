//Take a number and calculates the sum of all numbers from 1 upto and including n
//Solution  1 :
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

//const time1 = performance.now();
console.log(addUpTo(100000000));

//Solution 2 :
//better 
function addUpTo1(n) {
  return (n * (n + 1)) / 2;
}

//const time1 = performance.now();
console.log(addUpTo1(10000));
//const time2 = performance.now();
console.log(`time elapsed: ${(time2 - time1) / 1000} seconds`);
