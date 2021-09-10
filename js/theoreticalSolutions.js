function numberFunction() {
  fetch('numbers.json')
				  .then(function (response) {
				  return response.json();
			  })
				  .then(function (data) {
				  return appendData(data);
			  })
				  .catch(function (err) {
				  console.log(err);
			  });
}
function appendData(data) {
  const array1 = data;
	var index = -1;
	// const found = array1.find(element => element.name = cmd);
	var found = data.find(function(item, i){
		if(item.username === username){
			index = i;
			return i;
		}
	});

	if (index === 0) {
		found = data[index];
	} else {
		found = found;
	}
}

class Number {
  get(username) {
    this.number = numberFunction();
  }
}

const mycar = new Number("IcicleSavage");

console.log(mycar.number);
