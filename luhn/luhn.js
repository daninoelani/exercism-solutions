//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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

  let arr = str.split('')

  for (let i=0; i<arr.length; i++) {
      if (arr[i] === ' ') {
          arr.splice(i, 1)
      }
  }

  if (arr.length == 1) {
      return false;
  }

  for (let i=0; i<arr.length; i++) {
      arr[i] = parseInt(arr[i])
  }

  for (let i=arr.length - 2; i>=0; i-=2) {
      arr[i] = arr[i] * 2
  }

  for (let i=0; i<arr.length; i++) {
      if (arr[i] > 9) {
          arr[i] = arr[i] - 9
      }
  } 

  let arrSum = arr.reduce((acc, value) => acc + value)

  if (arrSum % 10 === 0) {
      return true
  } else {
      return false
  }
  
}