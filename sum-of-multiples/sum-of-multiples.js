//
// This is only a SKELETON file for the 'Sum of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sumOfMultiples = ([num1, num2, num3], divisor) => {
  let ints = [];

  for (let i = 1; i < divisor; i++) {
    ints = [...ints, i]
  }

  const filtered = ints.filter(int => ((num1 && int % num1 === 0) || (num2 && int % num2 === 0) || (num3 && int % num3 === 0)))
  
  if (filtered.length !== 0) {
    return filtered.reduce((acc, value) => acc + value)
  } else {
    return 0
  }
  
};
