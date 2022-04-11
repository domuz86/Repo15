// Only change code below this line
const milili = [10, 25, 4]
function myArr(mili){
    "use strict";
    milili[0]=mili[0];
    milili[1]=mili[1];
    milili[2]=mili[2];

    console.log(milili);
    return milili;
}  
// Using mili = [4, 10, 25] would be invalid
milili = [4,10,25];
// Only change code above this line
module.exports = myArr;