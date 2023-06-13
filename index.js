function hasTargetSum(array, target) {
  // Write your algorithm here
  const visitedNumbers = new Set();
    for (let num of array){
      const difference = target - num;
      if (visitedNumbers.has(difference)){
        return true;
      }
      visitedNumbers.add(num);
    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of the 'hasTargetSum' function is proportional 
  to the number of elements in the input array. So as the array gets bigger
  the function takes longer to run.
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  function hasTargetSum(array, target):
  Create an empty set called visitedNumbers
  For each num in array:
  Calculate the difference as target minus num
  If the difference exists in visitedNumbers:
  Return true
  Add num to visitedNumbers
  Return false
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
