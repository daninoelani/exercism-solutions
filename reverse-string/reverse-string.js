export const reverseString = (str) => {
        let reversed = "";    
        for (var i = str.length - 1; i >= 0; i--){        
          reversed += str[i];
        }    
        return reversed;
        
    };


//define a variable to return at the end; start from the end to pull each letter and add it to 
//the front of the new reversed string