//all colors need to be listed in the beginning in order to pass the test checking for all colors
export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]

//each color matches its index
export const colorCode = (str) => {    
    return COLORS.indexOf(str)
} 