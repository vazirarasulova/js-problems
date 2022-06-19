function MaxPrice(obj) {

  var arr = [];
  for(let i in obj){

     arr.push(obj[i].price)

  }

	return Math.max(...arr);

}

  
  console.log(MaxPrice([
    { name: "Ali", price: 200 },
    { name: "Umid",  price: 800 },
    { name: "Sardor",  price: 400 }
  ]));


