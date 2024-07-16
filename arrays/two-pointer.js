

function searchArray ( arr, targetSum) {
    let left = 0;
    let right = arr.length - 1;

    while ( left < right) {
      let currentSum = arr[left] + arr[right];
      if(currentSum === targetSum) {
        return [left, right];
      }
      else if ( current < targetSum) {
        left++;
      } else {
        right --;
      }
    }

    return [-1, -1];
}