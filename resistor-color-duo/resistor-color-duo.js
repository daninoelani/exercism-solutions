export const value = ([str1, str2]) => {
    const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
    return parseInt(colors.indexOf(str1).toString() + colors.indexOf(str2).toString())
}