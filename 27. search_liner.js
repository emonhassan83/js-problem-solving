/*
 * problem: linearSearch() function ti implement kore dhakao
 * input: linerSearch(['a', 'b', 'c', 'd', 'e'], 'c')
 *  output: 2 or 'not found!'
 */

function linearSearch(arr, val) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return "not found!";
}

console.log(linearSearch(["a", "b", "c", "d", "e"], "c"));
