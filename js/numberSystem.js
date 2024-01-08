if (window.location.search && searchParams.has('selected') && searchParams.has('user') === true) {
	var newUrl = '/SelectedNumber.html' + window.location.search;
	window.open(newUrl, "_self");
	var selectedInput = document.getElementById('selected');
	var userInput = document.getElementById('user');
	selectedInput.value = searchParams.get('selected');
	userInput.value = searchParams.get('user');
}
function saveNumber() {
	const myForm = document.getElementById('nform');
	const formData = new FormData(myForm);
	var userFull = formData.get('user') + '#' + document.getElementById('last4').value;
	var date = new Date();
	document.getElementById('dateSubmitted').value = 'Timestamp: ' + date;//.toDateString();
	document.getElementById('user').value = userFull;
	// formData.set('user', userFull);
	alert(`Your number is: ${formData.get('selected')} [FOR DISCORD ACCOUNT: ${userFull}]`);
	var cookieString = 'selected=' + formData.get('selected') + '; user=' + formData.get('user') + ';';
	document.cookie = cookieString;
	// window.localStorage.set("selected",formData.get('selected'));
	// window.localStorage.set("user",formData.get('user'));
}
/*function setData() {
					var paramsString = window.location.search;
					var searchParams = new URLSearchParams(paramsString);
					if (!window.location.search) {
						if (document.cookie) {
							var newUrl = '/SelectedNumber.html';
							window.open(newUrl, "_self");
						}
						else if (!document.cookie) {
							return;
						}
					}*/
