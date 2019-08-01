export const isLeap = (year) => {
    if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
        return false;
    } else {
        return true;
    }
}


/*
To check for a leap year, the year needed to be divisible by 4, or divisible by 400 if it is
divisible by 100. This was a simple if/else statement to check for divisibility.    
*/