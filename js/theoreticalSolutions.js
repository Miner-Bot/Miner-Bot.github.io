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
	class User {
		constructor(user) {
			this.username = user;
		}
		number() {
			const array1 = data;
			var index = -1;
			var found = data.find(function(item, i){
				if(item.username === this.username){
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
	}
}

const mycar = new User("FirstUser");

mycar.number();
