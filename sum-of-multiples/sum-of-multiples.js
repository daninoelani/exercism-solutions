export const sumOfMultiples = ([num1, num2, num3], divisor) => {
  let ints = [];

  //this defines all integers that are less than the divisor
  for (let i = 1; i < divisor; i++) {
    ints = [...ints, i]
  }

  //filter to check if the number has be inputted then check if any of the integers less than the divisor are divisible
  //by the number; those integers go into a new array called filtered
  const filtered = ints.filter(int => ((num1 && int % num1 === 0) || (num2 && int % num2 === 0) || (num3 && int % num3 === 0)))
  
  //only if there are any numbers in the new array (multiples of the divisor), add them all together
  if (filtered.length !== 0) {
    return filtered.reduce((acc, value) => acc + value)
  } else {
    return 0
  }
  
};
