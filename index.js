function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i]+array[j] === target && i!=j) return true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here: 
      Big O time complexity of my hasTargetSum function is: O(n^2)
*/


/* 
  Add your pseudocode here: 
    iterate from the beginning of the array
      for each element in the array, iterate from the beginning of the array
        if the sum of the element in outer loop and this inner loop is equal to the target
          return true
      if the iterations on both loops is completed and the consition isn't satidsfied    
        return false
*/


/*
  Add written explanation of your solution here:
    iterate from the beginning of the array using a for loop. Inside this for loop,
    for each element in the array, iterate from the beginning of the array again using 
    another for loop
      if the sum of the element in outer loop and this inner loop is equal to the target
        return true
    if the iterations on both loops is completed and the consition isn't satidsfied    
      return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
