function countTrue(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
  
    if(arr[i] == true){
      sum += arr[i]
    }
}
return sum
}

console.log(countTrue([false, true, false, true, true]));