function containsDuplicate(nums) {
  let numSet = new Set();

  for (const num of nums) {
    if (numSet.has(num)) {
      return true;
    }

    numSet.add(num);
  }

  return false;
}

// console.log(containsDuplicate([1, 1, 45, 7, 8]));
