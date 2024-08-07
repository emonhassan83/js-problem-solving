//* Array theke kivabe 'false value' khuje bad dite pari ?

const mixedArr = [
  "Emon",
  undefined,
  "Emon Hassan",
  false,
  "apple",
  40,
  "k",
  true,
  "Thanks all",
  NaN,
]; //* falsy value: false, undefined, nll, '', NaN, 0 */

/* const trueArry = mixedArr.filter(function(el){
    if(el){
        return true;
    }else{
        return false;
    }
}); */

const trueArr = mixedArr.filter(Boolean); // shortcut method
console.log(trueArr);
