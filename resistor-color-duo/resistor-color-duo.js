export const value = ([str1, str2]) => {
    const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
    return parseInt(colors.indexOf(str1).toString() + colors.indexOf(str2).toString())
}

//Similar to the original resistor-color problem, all are defined in the beginning then index
//is checked. Because the two numbers had to be concatenated instead of added together, I 
//converted each index to a string in order to concatenate and then converted it all back
//into an integer in the end.