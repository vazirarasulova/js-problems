function numbers(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    
    if(arr[i] >= 0){
      sum += arr[i]
    }
}
  return sum
}

console.log(numbers([1, 2, 0, -1, -2, 3, 4]));