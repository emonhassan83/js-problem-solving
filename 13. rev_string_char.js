/*
* reverse words char in a string like input: "I love Bangladesh" output:"I evol hsedalgnaB"
* Input: "I love Bangladesh"
* output: "I evol hsedalgnaB"
 */

const str = "I love Bangladesh";

function reverseWords(data) {
  const dataAsArray = data.split(" "); //* [ 'I', 'love', 'Bangladesh' ]

  const result = dataAsArray.map((d) => {
    return d.split("").reverse().join(""); //* [ 'I', 'evol', 'hsedalgnaB' ]
  });

  return result.join(" ");
}

console.log(reverseWords(str));