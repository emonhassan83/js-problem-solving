/* 
* You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.

* Sample Input: [10,33,5,99,6]
*/

const arr = [10, 33, 5, 99, 6];

/* function findSecondLargestElem(arr){
    let first = -1 , second = -1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    return second;
} */

const findSecondLargestElem = (arr) => {
  arr.sort((a, b) => b - a);
  return arr[1]; // Return the element at index 1 (second largest)
};

console.log("Second largest number of array: ", findSecondLargestElem(arr));