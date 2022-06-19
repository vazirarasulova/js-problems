var numbers = [1, 3, 0, 5, 0, 7,0];

function zeroEnd(numbers){
 
  var arr = [];

  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] == 0){
      arr.push(numbers[i]);
    }else{
      arr.unshift(numbers[i]);
    }
  }
  return arr.join("");

}

console.log(zeroEnd(numbers)); 