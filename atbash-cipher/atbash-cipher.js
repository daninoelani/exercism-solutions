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


/*
This was a pretty straightforward solution. I would like to eventually explore other ways 
to solve this problem. Because the alphabet was simply reversing, I created two arrays, one
of the normal values and one of the reversed values. I knew that I wanted to use indexes 
instead of building a key/value pair object. I split the array so that I wouldn't have to write
each separate comma and quotes. To lowercase on the string in order to make everything universal.
I removed spaces and commas from the input. I created a new array with the letters switched
then used regex to split the new string into chucks of five letters. Finally, joined it all 
together.
*/