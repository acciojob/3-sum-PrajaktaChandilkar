function threeSum(arr, target){
  closeSum = Number.MAX_VALUE;
  let len = arr.length;

  for(let i = 0; i < len; i++){
      for(let j = i +  1; j < len; j++){
          for(let k = j + 1; k < len; k++){
              maxSum = arr[i] + arr[j] + arr[k];
              if (Math.abs(maxSum - target ) < Math.abs(closeSum - target)){
                  closeSum = maxSum;
              }
          }
      }
  }
return closeSum;
}

//do not modify below this line
module.exports=threeSum;
console.log(threeSum( [-1, 2, 1, -4], 1))