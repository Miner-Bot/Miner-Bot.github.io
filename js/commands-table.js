function titleCase(str) {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
fetch('commands.json')
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
                      const prefix = '=';
                      for (var o = 0; o < data.length; o++) {
                        var str;
                        if (data[o].usage && data[o].aliases) {
                          str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name + ' ' + data[o].usage + '<br>' + 'Aliases:' + ' ' + prefix + data[o].aliases;
                        } else if (data[o].usage && !data[o].aliases) {
                          str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name + ' ' + data[o].usage;
                        } else if (!data[o].usage && data[o].aliases) {
                          str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name + '<br>' + 'Aliases:' + ' ' + prefix + data[o].aliases;
                        } else if (!data[o].usage && !data[o].aliases) {
                          str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name;
                        }
                        var table = document.getElementById("commands-info");
                        var tr = document.createElement("tr");
                        var td = document.createElement("td");
                        var hr = document.createElement("hr");
                        var p = document.createElement("p");

                        var att = document.createAttribute("id");
                        var att2 = document.createAttribute("class");
                        var att3 = document.createAttribute("class");
                        var att4 = document.createAttribute("class");


                        att.value = data[o].name;
                        att2.value = 'text-box bungee-body-text';
                        att3.value = 'divider-page-width-mod my-2';
                        att4.value = 'bungee-small-body-text';
                        
                        table.appendChild(tr);
                        tr.setAttributeNode(att);
                        tr.appendChild(td);
                        td.setAttributeNode(att2);
                        td.innerHTML = '<a class="js-scroll-trigger" href="/command#' + data[o].name + '" onclick=localStorage.setItem("clickedon", data[o].name)>' + titleCase(data[o].name) + '</a>';
                        td.appendChild(hr);
                        td.appendChild(p);
                        hr.setAttributeNode(att3);
                        p.setAttributeNode(att4);
                        p.innerHTML = str;
                      }
                    }
