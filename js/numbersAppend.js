fetch('numbers.json')
  .then(function (response) {
  return response.json();
})
  .then(function (data) {
  appendData(data);
})
  .catch(function (err) {
  console.log(err);
});
function appendData(data) {
  var mainContainer = document.getElementById("selected");
  for (var i = 0; i < data.length; i++) {
    var option = document.createElement("option");
    var att = document.createAttribute("value");
    var att2 = document.createAttribute("label");
    option.innerHTML = data[i].number;
    att.value = data[i].number;
    att2.value = 'ID: ' + data[i].id + '(' + data[i].number + ')';
    mainContainer.appendChild(option);
    option.setAttributeNode(att);
    option.setAttributeNode(att2);
  }
}
