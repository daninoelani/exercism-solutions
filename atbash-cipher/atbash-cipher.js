export const encode = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz123'
    const reversed = 'zyxwvutsrqponmlkjihgfedcba123'

    const alphabetArr = alphabet.split('')
    const reversedArr = reversed.split('')

    let strArr = str.toLowerCase().split('')
    // console.log(strArr)

    for (let i=0; i<strArr.length; i++) {
        if (strArr[i] == ' ' || strArr[i] == ',') {
            strArr.splice(i, 1)
        }
    }
    // console.log(strArr)

    let newArr = [];
    let index = [];
    for (let i=0; i<strArr.length; i++) {
        index.push(alphabetArr.indexOf(strArr[i]))
        // console.log(index)
    }
    newArr = index.map(num => reversedArr[num])
    let newStr = newArr.join('')
    newStr = newStr.match(/.{1,5}/g);

    return newStr.join(' ')
}