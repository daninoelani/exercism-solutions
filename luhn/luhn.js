export class Luhn {
  constructor(number) {
    this.number = number
  }

  get valid() {
    return luhnFunction(this.number)
  }
}


const luhnFunction = (str) => {
  for (let i=0; i<str.length; i++) {
      let code = str.charCodeAt(i);
      if (!((code > 47 && code < 58) || code == 32)) {
          return false
      }
  }

  //The first for loop runs through the input string to check if there are only numbers and spaces. Any sort of
  //symbols make the code invalid immediately.

  let arr = str.split('')
  //split the str to create an array to be easier to check.


  //This for loop goes through the array to remove any spaces
  for (let i=0; i<arr.length; i++) {
      if (arr[i] === ' ') {
          arr.splice(i, 1)
      }
  }

  //Any input of only one character is invalid
  if (arr.length == 1) {
      return false;
  }

  //Switches every string to an integer in order to run math functions
  for (let i=0; i<arr.length; i++) {
      arr[i] = parseInt(arr[i])
  }

  //multiplies every other integer by 2 starting from the end
  for (let i=arr.length - 2; i>=0; i-=2) {
      arr[i] = arr[i] * 2
  }

  //if any of the numbers becomes larger than 9, subtract 9
  for (let i=0; i<arr.length; i++) {
      if (arr[i] > 9) {
          arr[i] = arr[i] - 9
      }
  } 

  //add all the numbers together
  let arrSum = arr.reduce((acc, value) => acc + value)

  //check if the total number is divisible by 10
  if (arrSum % 10 === 0) {
      return true
  } else {
      return false
  }
  
}
